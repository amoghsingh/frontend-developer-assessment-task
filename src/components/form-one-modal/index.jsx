import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormOne = ({ modeType, isVisible, cData, onClose, onNextClick }) => {
  if (!isVisible) return null;

  if (modeType === "add") {
    cData = {};
  }

  const handleClose = (e) => {
    if (e.target.id === "modal-wrapper1") {
      onClose();
      cData = {};
    }
  };

  const { register, formState, getValues } = useForm({
    defaultValues: cData,
    mode: "all",
  });

  const { errors } = formState;

  return (
    <>
      <div
        id="modal-wrapper1"
        className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full "
        onClick={handleClose}
      >
        <div className="p-8 flex flex-col items-center gap-8 bg-white rounded-[10px] border border-card-border">
          <div className="flex flex-col items-start gap-24">
            <div className="flex flex-col items-start gap-6 w-[513px]">
              <div className="flex w-[513px] justify-between items-center">
                <div className="text-xl font-normal">
                  {modeType === "add" ? "Create a job" : "Edit a job"}
                </div>
                <div className="text-base font-medium">Step 1</div>
              </div>

              <div className="flex flex-col items-start self-stretch gap-2">
                <div className="flex flex-col items-start self-stretch gap-1">
                  <div className="flex w-[214px] items-center font-medium text-sm text-text-color">
                    Job title
                    <span className="text-error-color text-sm font-medium">
                      *
                    </span>
                  </div>

                  <div className="flex items-start self-stretch gap-2.5 py-2 px-3 border border-card-border rounded-[5px] ">
                    <div className="flex items-center flex-1">
                      <input
                        className="w-full outline-none text-sm placeholder:text-placeholder-color"
                        placeholder="ex. UX UI Designer"
                        type="text"
                        {...register("jobTitle", {
                          validate: (fieldValue) => {
                            return (
                              fieldValue.trim().length !== 0 ||
                              "Job Title is mandatory!"
                            );
                          },
                        })}
                      />
                    </div>
                  </div>
                  <p className="text-error-color text-xs ">
                    {errors.jobTitle?.message}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start self-stretch gap-2">
                <div className="flex flex-col items-start self-stretch gap-1">
                  <div className="flex w-[214px] items-center font-medium text-sm text-text-color">
                    Company name
                    <span className="text-error-color text-sm font-medium">
                      *
                    </span>
                  </div>

                  <div className="flex items-start self-stretch gap-2.5 py-2 px-3 border border-card-border rounded-[5px] ">
                    <div className="flex items-center flex-1">
                      <input
                        type="text"
                        className="w-full outline-none text-sm placeholder:text-placeholder-color"
                        placeholder="ex. Google"
                        {...register("companyName", {
                          validate: (fieldValue) => {
                            return (
                              fieldValue.trim().length !== 0 ||
                              "Company name is mandatory!"
                            );
                          },
                        })}
                      />
                    </div>
                  </div>
                  <p className="text-error-color text-xs">
                    {errors.companyName?.message}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start self-stretch gap-2">
                <div className="flex flex-col items-start self-stretch gap-1">
                  <div className="flex w-[214px] items-center font-medium text-sm text-text-color">
                    Industry
                    <span className="text-error-color text-sm font-medium">
                      *
                    </span>
                  </div>

                  <div className="flex items-start self-stretch gap-2.5 py-2 px-3 border border-card-border rounded-[5px] ">
                    <div className="flex items-center flex-1">
                      <input
                        type="text"
                        className="w-full outline-none text-sm placeholder:text-placeholder-color"
                        placeholder="ex. Information Technology"
                        {...register("industry", {
                          validate: (fieldValue) => {
                            return (
                              fieldValue.trim().length !== 0 ||
                              "Industry name is mandatory!"
                            );
                          },
                        })}
                      />
                    </div>
                  </div>
                  <p className="text-error-color text-xs">
                    {errors.industry?.message}
                  </p>
                </div>
              </div>

              <div className="flex items-end gap-6 self-stretch">
                <div className="flex flex-col items-start gap-2  flex-1">
                  <div className="flex flex-col items-start self-stretch gap-1">
                    <div className="flex w-[214px] items-center gap-2 text-sm font-medium">
                      Location
                    </div>
                    <div className="flex items-start self-stretch py-2 px-3 gap-2.5 rounded-[5px] border border-card-border ">
                      <div className="flex items-center flex-1">
                        <input
                          type="text"
                          className="font-sm font-normal outline-none text-sm placeholder:text-placeholder-color"
                          placeholder="ex. Chennai"
                          {...register("location")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2  flex-1">
                  <div className="flex flex-col items-start self-stretch gap-1">
                    <div className="flex w-[214px] items-center gap-2 text-sm font-medium">
                      Remote type
                    </div>
                    <div className="flex items-start self-stretch py-2 px-3 gap-2.5 rounded-[5px] border ">
                      <div className="flex items-center flex-1">
                        <input
                          type="text"
                          className="font-sm font-normal outline-none text-sm placeholder:text-placeholder-color"
                          placeholder="ex. In-office"
                          {...register("remoteType")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-[513px] justify-end items-center pt-24">
                <div className="flex items-start gap-6">
                  <button
                    type="button"
                    onClick={() => {
                      const values = getValues();
                      onNextClick(values);
                    }}
                    className="flex justify-center items-center py-2 px-4 rounded-md bg-primary-color text-zinc-50 shadow-sm"
                    disabled={!formState.isValid}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormOne;
