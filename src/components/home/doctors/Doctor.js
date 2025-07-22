import React from "react";
import { useLocation } from "react-router-dom";

function Doctor(props) {
  const { imgSrc, name, speciality, about } = props?.doctorDetails;
  const socialLinks =
    props?.doctorDetails?.socialLinks !== undefined
      ? JSON.parse(props?.doctorDetails?.socialLinks)
      : [];

  const location = useLocation();
  const requiredPathsegment = location.pathname;

  return (
    <>
      <div className="col-lg-6 my-2">
        <div
          className="member d-flex align-items-start"
          style={{
            width: "100%",
            background: "#f9f9f9",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            flexDirection: "column",
          }}
        >
          <div className="d-flex w-100 align-items-start mb-3">
            <div className="pic" style={{ width: "25%", marginRight: "20px" }}>
              <img
                src={`img/doctors/${imgSrc}`}
                className="img-fluid"
                alt={name}
                style={{ border: "4px solid #e0e0e0", borderRadius: "100%" }}
              />
            </div>
            <div className="member-info" style={{ width: "70%" }}>
              <h4 style={{ color: "#2c4964", fontWeight: "bold" }}>{name}</h4>
              <span style={{ color: "#449c74" }}>{speciality}</span>
              <p style={{ fontSize: "15px", lineHeight: "1.6" }}>{about}</p>
            </div>
          </div>

          <div
            style={{
              background: "rgb(238, 249, 245)",
              padding: "15px",
              borderRadius: "10px",
              fontSize: "14px",
              width: "100%",
            }}
          >
            {name === "Dr. Nishita Rao" ? (
              <p>
                <strong>Best Gynecologist for Normal Delivery</strong> with <strong>15
                years of experience,</strong> specializing in <strong>obstetrics and
                gynecology.</strong> Dr. Nishita Rao is dedicated to providing
                <strong>comprehensive maternity care,</strong> ensuring a safe and healthy
                pregnancy for mothers and babies.
              </p>
            ) : (
              <p>
                <strong>Highly experienced Paediatrician</strong> with over <strong>15
                years in pediatric medicine,</strong> Dr. Mahesh Rao offers expert care
                in child health and development. As a <strong>child specialist,</strong>he
                ensures the best possible care for your child's well-being at
                every stage of their growth.
              </p>
            )}
          </div>
          
        </div>
      </div>
      

      
    </>
  );
}

export default Doctor;