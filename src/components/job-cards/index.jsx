import React from "react";
import logo from "../../assets/images/logo.png";

const JobCards = ({ data, showEditModal, setDeleteCard }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 py-4">
        {data.length > 0 ? (
          data.map((item) => {
            return (
              <div
                id={item.id}
                className="px-[24px] py-4 w-[830px] flex flex-col items-start gap-5 rounded-[10px] border border-card-border bg-white"
              >
                <div className="flex justify-between item-start self-stretch">
                  <div className="flex item-start self-stretch gap-2">
                    <div>
                      <img src={logo} />
                    </div>
                    <div className="flex flex-col items-start gap-5">
                      <div className="flex flex-col items-start gap-6">
                        <div className="flex flex-col items-start">
                          <div className="text-2xl text-text-color font-normal">
                            {item.jobTitle}
                          </div>
                          <div className="text-base font-normal text-text-color">
                            <span>{item.companyName} </span>-
                            <span> {item.industry}</span>
                          </div>
                          <div className="text-base font-normal text-placeholder-color">
                            <span>{item.location} </span>
                            <span>({item.remoteType})</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-start self-stretch gap-2">
                          <div className="flex flex-col items-start gap-2.5 text-base font-normal text-text-color	">
                            Part-Time (9:00 am - 5:00 pm IST)
                          </div>
                          <div className="flex items-start gap-2.5 text-text-color text-base font-normal">
                            Experience ({item.expMin} - {item.expMax} years)
                          </div>
                          <div className="flex items-start text-text-color	">
                            INR (<span>&#8377;</span>) {item.minSalary} -{" "}
                            {item.maxSalary} / Month
                          </div>
                          <div className="flex items-start text-text-color	">
                            {item.totalEmployee} employees
                          </div>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-1">
                          <div className="flex justify-center items-start gap-[5px]">
                            {item.applyType === "0" ? (
                              <button
                                type="button"
                                className="bg-primary-color text-font-color flex justify-center items-center py-2 px-4 rounded-md shadow-sm"
                              >
                                Apply Now
                              </button>
                            ) : (
                              <button
                                type="button"
                                className="bg-white text-primary-color flex justify-center items-center py-2 px-4 rounded-[5px] font-medium border border-primary-color"
                              >
                                External Apply
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[135px] h-[56px] items-start justify-end  gap-2">
                    <svg
                      onClick={() => {
                        showEditModal(item);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                    <svg
                      onClick={() => {
                        setDeleteCard(item.id);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h3>No Job Card</h3>
        )}
      </div>
    </>
  );
};

export default JobCards;
