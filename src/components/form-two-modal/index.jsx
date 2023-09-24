import React from "react";
import { useForm } from "react-hook-form";

const FormTwo = ({ modeType, isVisible, cData, onClose, onNextClick }) => {
  if (!isVisible) return null;

  if (modeType === "add") {
    cData = {};
  }

  const handleClose = (e) => {
    if (e.target.id === "modal-wrapper2") {
      onClose();
      cData = {};
    }
  };

  const { register, formState, getValues, setValue } = useForm({
    defaultValues: cData,
  });

  const { errors } = formState;

  const handleChange = (e) => {
    setValue("applyType", parseInt(e.target.value));
  };

  return (
    <>
      <div
        id="modal-wrapper2"
        className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
        onClick={handleClose}
      >
        <div className="p-8 flex flex-col items-center gap-8 bg-white rounded-[10px] border border-card-border">
          <div className="flex flex-col items-start gap-24">
            <div className="flex flex-col items-start gap-6 w-[513px]">
              <div className="flex w-[513px] justify-between items-center">
                <div className="text-xl font-normal">
                  {modeType === "add" ? "Create a job" : "Edit a job"}
                </div>
                <div className="text-base font-medium">Step 2</div>
              </div>

              <div className="flex items-end gap-6 self-stretch">
                <div className="flex flex-col items-start gap-2  flex-1">
                  <div className="flex flex-col items-start self-stretch gap-1">
                    <div className="flex w-[214px] items-center gap-2 text-sm font-medium">
                      Experience
                    </div>
                    <div className="flex items-start self-stretch py-2 px-3 gap-2.5 rounded-[5px] border border-card-border ">
                      <div className="flex items-center flex-1">
                        <input
                          type="number"
                          className="font-sm font-normal outline-none text-sm placeholder:text-placeholder-color"
                          placeholder="Minimum"
                          {...register("expMin")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2  flex-1">
                  <div className="flex flex-col items-start self-stretch gap-1">
                    <div className="flex items-start self-stretch py-2 px-3 gap-2.5 rounded-[5px] border ">
                      <div className="flex items-center flex-1">
                        <input
                          type="number"
                          className="font-sm font-normal outline-none text-sm placeholder:text-placeholder-color"
                          placeholder="Maximum"
                          {...register("expMax")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-end gap-6 self-stretch">
                <div className="flex flex-col items-start gap-2  flex-1">
                  <div className="flex flex-col items-start self-stretch gap-1">
                    <div className="flex w-[214px] items-center gap-2 text-sm font-medium">
                      Salary
                    </div>
                    <div className="flex items-start self-stretch py-2 px-3 gap-2.5 rounded-[5px] border border-card-border ">
                      <div className="flex items-center flex-1">
                        <input
                          type="text"
                          className="font-sm font-normal outline-none text-sm placeholder:text-placeholder-color"
                          placeholder="Minimum"
                          {...register("minSalary")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2  flex-1">
                  <div className="flex flex-col items-start self-stretch gap-1">
                    <div className="flex items-start self-stretch py-2 px-3 gap-2.5 rounded-[5px] border ">
                      <div className="flex items-center flex-1">
                        <input
                          type="text"
                          className="font-sm font-normal outline-none text-sm placeholder:text-placeholder-color"
                          placeholder="Maximum"
                          {...register("maxSalary")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start self-stretch gap-2">
                <div className="flex flex-col items-start self-stretch gap-1">
                  <div className="flex w-[214px] items-center font-medium text-sm text-text-color">
                    Total employee
                  </div>

                  <div className="flex items-start self-stretch gap-2.5 py-2 px-3 border border-card-border rounded-[5px] ">
                    <div className="flex items-center flex-1">
                      <input
                        type="text"
                        className="w-full outline-none text-sm placeholder:text-placeholder-color"
                        placeholder="ex. 100"
                        {...register("totalEmployee")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start self-stretch gap-6 ">
                <div className="flex flex-col items-start flex-1 gap-1">
                  <div className="flex items-center gap-1 text-text-color text-sm font-medium">
                    Apply type
                  </div>
                  <div className="flex py-2 px-0 items-center h-9 gap-5">
                    <div className="flex justify-center items-center gap-4">
                      <div className="flex items-center gap-1">
                        <span className="h-5 w-5 ">
                          <input
                            type="radio"
                            value={0}
                            onChange={handleChange}
                            className="h-5 w-5"
                            {...register("applyType")}
                          />
                        </span>
                        <span className="text-sm font-normal text-placeholder-color">
                          Quick Apply
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="h-5 w-5">
                          <input
                            type="radio"
                            value={1}
                            onChange={handleChange}
                            className="h-5 w-5"
                            {...register("applyType")}
                          />
                        </span>
                        <span className="text-sm font-normal text-placeholder-color">
                          External Apply
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-[513px] justify-end items-center pt-24">
                <div className="flex items-start gap-6">
                  <button
                    type="button"
                    className="flex justify-center items-center py-2 px-4 rounded-md bg-primary-color text-zinc-50 shadow-sm"
                    onClick={() => {
                      const values = getValues();
                      console.log(values);
                      onNextClick(values);
                    }}
                  >
                    Save
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

export default FormTwo;
