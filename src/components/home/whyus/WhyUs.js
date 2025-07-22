import React, { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import "./WhyUs.css";

const reasons = [
  {
    title: "High Success Rate for Normal Deliveries",
    content: `We are a <strong>top maternity care hospital in Bangalore</strong>, specializing in <strong>normal deliveries</strong> with a <strong>high success rate</strong> and a focus on <strong>natural childbirth.</strong>`,
  },
  {
    title: "Experienced Obstetricians and Gynecologists",
    content: `With over <strong>33 years of experience,</strong> our team, led by <strong>Dr. Mahesh Rao</strong> and <strong>Dr. Nishita Rao</strong>, is known for providing expert care in <strong>women's health</strong> and <strong>maternity services.</strong>`,
  },
  {
    title: "24/7 Labor and Delivery Support at Our Safe Delivery Hospital",
    content: `We offer <strong>24/7 labor and delivery support</strong> to ensure your comfort and peace of mind throughout your pregnancy journey.`,
  },
  {
    title: "Affordable Maternity Hospital with Top-Quality Care",
    content: `As a <strong>safe delivery hospital</strong>, we provide <strong>affordable maternity services</strong> without compromising on quality care for both mother and baby.`,
  },
  {
    title: "State-of-the-Art Facilities for Maternity and Gynecology Care",
    content: `Our <strong>state-of-the-art facilities</strong> offer <strong>world-class technology</strong>, ensuring accurate diagnoses and effective treatments for all <strong>maternity and gynecology needs.</strong>`,
  },
];

function WhyUs() {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div className="whyus-container">
      <div className="section-title section-titlee">
        <h2>
          Why Choose us as the best maternity hospital for normal delivery in
          Bangalore?
        </h2>
      </div>
      <div className="accordion">
        {reasons.map((item, index) => (
          <Accordion
            key={index}
            className="accordionn"
            expanded={expanded === index}
            onChange={handleChange(index)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#d94a6e" }} />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography className="accordion-title">{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                className="accordion-content"
                component="div"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default WhyUs;
