import React, { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import "./Faq.css";

const faqs = [
  {
    title: "Is Lakshmi Maternity & Surgical Centre the best hospital for normal delivery in Bangalore?",
    content: `
      Yes! <strong>Lakshmi Maternity & Surgical Centre</strong> is widely recognized as one of the <strong>best maternity hospitals for normal delivery in Bangalore</strong> offering a <strong>high success rate</strong> and <strong>safe delivery</strong> options. Our team of experienced doctors focuses on <strong>natural childbirth</strong> and provides <strong>personalized care </strong>for each patient.`,
  },
  {
    title: "What makes Lakshmi Maternity & Surgical Centre affordable for maternity care?",
    content: `
      We believe in making <strong>high-quality maternity care </strong>accessible. At <strong>Lakshmi Maternity & Surgical Centre,</strong> we offer affordable maternity services, ensuring you receive expert care without the high costs typically associated with <strong>normal deliveries.</strong>`,
  },
  {
    title: "Can I have a natural childbirth at Lakshmi Maternity & Surgical Centre?",
    content: `
      Absolutely! We specialize in <strong>safe normal deliveries</strong> and aim for <strong>minimal intervention.</strong> Our team, led by <strong>Dr. Nishita Rao,</strong> will work with you to support a <strong>natural childbirth,</strong> making sure your birth experience is as comfortable and empowering as possible.`,
  },
  {
    title: "Do you provide 24/7 support for labor and delivery?",
    content: `
      Yes, at <strong>Lakshmi Maternity & Surgical Centre,</strong> we offer <strong>24/7 labor and delivery support.</strong> Our doctors and staff are always available to help you, answer your questions, and ensure everything goes smoothly, no matter what time it is.`,
  },
  {
    title: "What kind of care do you offer for mothers and babies after delivery?",
    content: `
      At <strong>Lakshmi Maternity & Surgical Centre,</strong> we provide exceptional <strong>mother and baby care.</strong> From <strong>post-delivery care</strong> for mothers to ensuring the health of newborns, we have a dedicated team of specialists who provide support and guidance throughout the recovery process.`,
  },
];

function Faq() {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div className="faq-container">
      <div className="section-title section-titlee">
        <h2>FAQs About Lakshmi Maternity & Surgical Centre </h2>
        <p>Answers to the most commonly asked questions</p>
      </div>
      <div className="accordion">
        {faqs.map((item, index) => (
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

export default Faq;
