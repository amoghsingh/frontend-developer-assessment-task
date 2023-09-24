import React, { useEffect, useState, useRef } from "react";
import FormOne from "../form-one-modal";
import FormTwo from "../form-two-modal";
import JobCards from "../job-cards";
import DeleteCardModal from "../delete-card-modal";
import { API } from "../../services/api";

const Home = () => {
  const [jobcardData, setJobcardData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteCardId, setDeleteCardId] = useState(null);
  const [cardData, setCardData] = useState({});
  const [obj1, setObj1] = useState({});
  const [obj2, setObj2] = useState({});
  const [mode, setMode] = useState("add");
  const isFirstLoad = useRef(true);
  let mergedObj;

  const fetchJobCards = () => {
    API("get").then((res) => {
      setJobcardData(res);
    });
  };

  useEffect(() => {
    fetchJobCards();
  }, []);

  useEffect(() => {
    if (isFirstLoad.current === true) {
      isFirstLoad.current = false;
    } else if (JSON.stringify(obj2) !== "{}") {
      mergedObj = Object.assign(obj1, obj2);
      console.log(mergedObj);
      if (mode == "add") createNewJobcard();
      else editJobCard();
    }
  }, [obj2]);

  useEffect(() => {
    if (isFirstLoad.current === true) {
      isFirstLoad.current = false;
    } else if (JSON.stringify(cardData) !== "{}") {
      setMode("edit");
      setShowModal(true);
    }
  }, [cardData]);

  const createNewJobcard = () => {
    mergedObj = Object.assign(obj1, obj2);
    const newTask = mergedObj;

    API("post", newTask).then((res) => {
      fetchJobCards();
    });
  };

  const editJobCard = () => {
    mergedObj = Object.assign(obj1, obj2);
    const editedCard = mergedObj;

    API("put", editedCard, obj1.id).then((res) => {
      console.log(res);
      fetchJobCards();
    });
  };

  const deleteJobCard = async () => {
    API("delete", "", deleteCardId).then((res) => {
      console.log(res);
      setShowDeleteModal(false);
      fetchJobCards();
    });
  };

  return (
    <>
      <nav className="flex bg-black py-4 px-4">
        <button
          className="rounded-sm bg-primary-color text-zinc-50 p-2"
          data-te-toggle="modal"
          data-te-target="#exampleModal"
          data-te-ripple-init
          data-te-ripple-color="light"
          onClick={() => {
            setMode("add");
            setShowModal(true);
          }}
        >
          Create Job
        </button>
      </nav>

      {jobcardData?.length >= 0 ? (
        <JobCards
          data={jobcardData}
          showEditModal={(data) => {
            setCardData(data);
          }}
          setDeleteCard={(id) => {
            setDeleteCardId(id);
            setShowDeleteModal(true);
          }}
        />
      ) : null}

      <FormOne
        modeType={mode}
        isVisible={showModal}
        cData={JSON.stringify(cardData) !== "{}" ? cardData : {}}
        onClose={() => {
          setShowModal(false);
          setCardData({});
        }}
        onNextClick={(data) => {
          let obj = Object.assign(cardData, data);
          setObj1(obj);
          console.log("Form one values : ", data);
          setShowModal2(true);
          setShowModal(false);
        }}
      />

      <FormTwo
        modeType={mode}
        isVisible={showModal2}
        cData={JSON.stringify(obj1) !== "{}" ? obj1 : {}}
        onClose={() => {
          setShowModal2(false);
          setCardData({});
        }}
        onNextClick={(data) => {
          console.log("form two values: ", data);
          setObj2(data);
          setShowModal2(false);
        }}
      />

      <DeleteCardModal
        isVisible={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
        }}
        deleteCard={deleteJobCard}
      />
    </>
  );
};

export default Home;
