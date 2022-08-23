import React from "react"
import { Accordion, Button, Carousel, Col, Row } from "react-bootstrap"

import gulyaSrc from "./images/dove.png"
import src1 from "./images/1.jpg"
import src2 from "./images/2.jpg"
import src3 from "./images/3.jpg"
import src4 from "./images/4.jpg"

import styles from "./home.module.scss"

interface Props {
  onSubmit: () => void
}

export const Home: React.FC<Props> = ({ onSubmit }) => {
  return (
    <div className={styles.container}>
      <img src={gulyaSrc} alt="" className={styles.logo} />
      <h1 className={styles.title}>Гуля Онлайн</h1>

      <Row className="justify-content-md-center mb-4">
        <Col xs="auto">
          <Carousel style={{ width: 800 }} interval={1000}>
            <Carousel.Item>
              <img src={src1} alt="First slide" className={styles.image} />
              <Carousel.Caption>
                <h3>Самая быстрорастущая соцсеть 1993 года</h3>
                <p>Буквально горячий пирожок</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={src2} alt="Second slide" className={styles.image} />

              <Carousel.Caption>
                <h3>Самые актуальные мемы</h3>
                <p>Зойди и зоцени</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={src3} alt="Third slide" className={styles.image} />

              <Carousel.Caption>
                <h3>Самые упитанные гули</h3>
                <p>Кормим отборным рисом</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={src4} alt="Third slide" className={styles.image} />

              <Carousel.Caption>
                <h3>Внезапные куси</h3>
                <p>Раздачи каждый день</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row className="justify-content-md-center" style={{ marginBottom: 50 }}>
        <Col xs="4">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Кто такая гуля?</Accordion.Header>
              <Accordion.Body>Гуля это птица</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Гуля это сова?</Accordion.Header>
              <Accordion.Body>Гуля это не сова</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Точно не сова?</Accordion.Header>
              <Accordion.Body>Грибом клянусь</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      <Row style={{ marginBottom: 500 }}>
        <Col>
          <Button onClick={onSubmit}>Зарегистрироваться</Button>
        </Col>
      </Row>
    </div>
  )
}
