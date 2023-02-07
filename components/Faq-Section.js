import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import {
  Container,
  Typography,
  useMediaQuery,
  makeStyles,
} from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import theme from "../theme/theme";

const FaqSection = ({ modalToggler }) => {
  const sm = useMediaQuery(theme.breakpoints.down(768)),
    md = useMediaQuery(theme.breakpoints.down(996));

  const useStyles = makeStyles({
    sectionEight: {
      color: theme.palette.common.black,
      "& h2": {
        textAlign: "center",
        fontWeight: 600,
        margin: "20px 0 35px",
      },
      "& .accordion": {
        "& .accordion__item": {
          color: theme.palette.common.black,
          '& div[aria-expanded="true"]': {
            backgroundColor: "#f3f3f3",
            color: theme.palette.primary.main,
            transition: "all .5s",
            "&:after": {
              background: "black",
              transform: "rotate(225deg)",
            },
            "&:before": {
              background: "black",
              transform: "rotate(135deg)",
            },
          },
          "& .accordion__button": {
            padding: sm ? "14px 62px 14px 15px" : "14px 62px 14px 29px",
            border: "1px solid #d7dce3",
            fontSize: md ? "16px" : "18px",
            fontWeight: 600,
            backgroundColor: theme.palette.common.white,
            position: "relative",
            outline: 0,
            cursor: "pointer",
            "&:hover": {
              color: theme.palette.primary.main,
              "&:after, &:before": {
                background: theme.palette.primary.main,
              },
            },
            "&:after, &:before": {
              content: "''",
              display: "block",
              position: "absolute",
              width: "20px",
              height: "2px",
              background: theme.palette.common.black,
              right: "15px",
              top: "calc(50% - 2px)",
              transition: "all .5s",
            },
            "&:after": {
              transform: "rotate(90deg)",
            },
          },
          // "& .accordion__panel": {
          //   transition: "all 1.5s",
          //   padding: md ? "20px" : "40px",
          //   textAlign: "justify",
          //   columnCount: sm ? 1 : 2,
          //   columnGap: "60px",
          //   columnRule: "1px solid #DADADA",
          //   "& p": {
          //     fontSize: "16px",
          //     marginBottom: "10px",
          //   },
          "& .accordion__panel": {
            transition: "all 1.5s",
            padding: md ? "20px" : "40px",
            textAlign: "start",
            "& p": {
              fontSize: "16px",
              marginBottom: "10px",
            },
            "& a": {
              color: "#0e80b0",
              "&:hover": {
                textDecoration: 0,
              },
            },
            "& ul": {
              paddingLeft: "45px",
              listStyle: "none",
              "& li": {
                position: "relative",
                fontSize: "16px",
                marginBottom: "10px",
                "&:before": {
                  content: "''",
                  display: "block",
                  position: "absolute",
                  left: "-45px",
                  top: "11px",
                  width: "25px",
                  height: "1px",
                  background: "black",
                },
              },
            },
          },
        },
      },
      "& button": {
        display: "block",
        margin: "60px auto 0",
      },
    },
  });
  const classes = useStyles();

  const accordionItems = [
    {
      heading: "Из чего будет складываться стоимость на услуги?",
      content: `
                <p>
                    Стоимость услуги зависит от объёма работ, сложности её выполнения и заданных сроков.
                </p>
            `,
    },
    {
      heading: "Есть ли какие-то гарантии на сроки выполнения услуг?",
      content: `
                <p>
                    Сроки выполнения услуг прописываются в договоре, тем самым подкрепляя наши обязательства перед клиентом.
                </p>
            `,
    },
    {
      heading: "Работаем ли мы в выходные или праздничные дни?",
      content: `
                <p>
                    Мы можем выполнить работы в выходные или праздничные дни по предварительной договоренности с заказчиком.
                </p>
            `,
    },
    {
      heading: "Проводим ли мы техническое обслуживание оборудования?",
      content: `
                <p>
                    Мы проводим техническое обслуживание оборудования согласно графику планово-предупредительных ремонтов (ППР),  который мы составляем индивидуально для каждого электротехнического комплекса.
                </p>
            `,
    },
    {
      heading: "Предоставляем ли мы гарантии на проводимые работы?",
      content: `
                <p>
                    Мы предоставляем гарантию на все выполненные нами работы в течение 30 календарных со дня подписания акта выполненных работ.
                </p>
            `,
    },
  ];
  return (
    <section
      className="myfaq"
      id="faq"
    >
      <Container className={classes.sectionEight}>
        <h3 style={{ color: "black", paddingBottom: "25px", fontWeight: "bold" }}>
          Ответы на часто задаваемые вопросы:
        </h3>
        <Accordion
          allowZeroExpanded={true}
          allowMultipleExpanded={true}
          //   preExpanded={[1]}
          className="accordion"
        >
          {accordionItems.map((item, index) => (
            <AccordionItem key={index} uuid={index + 1}>
              <AccordionItemButton>{item.heading}</AccordionItemButton>
              <AccordionItemPanel
                style={{
                  backgroundColor: "white",
                  border: "solid 1px #d7dce3",
                }}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default FaqSection;
