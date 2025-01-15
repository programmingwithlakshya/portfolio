import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Hire = () => {
  const form = useRef();

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cr1sxqb", "template_slyyhux", form.current, {
        publicKey: "Pd-_4JLSfEz85zayQ",
      })
      .then(
        (res) => {
          console.log("SUCCESS!", res);
          setValues({
            fullName: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };


  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Message Me
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">


                        <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Name</label>
                            <input  type="text" name="user_name" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input  type="email" name="user_email" onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name="message"></textarea>
                        </div>
                        <input type="submit" value="Send" className="btf" />
                        </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hire;
