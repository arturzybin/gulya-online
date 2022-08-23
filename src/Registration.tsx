import React from "react"
import { Col, Button, InputGroup, Form, Row } from "react-bootstrap"

interface Props {
  onSubmit: () => void
}

export const Registration: React.FC<Props> = ({ onSubmit }) => {
  return (
    <>
      <Row className="justify-content-md-center mb-4 mt-4">
        <Col xs="6">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Электронная почта в гулином формате</Form.Label>
              <Form.Control type="email" placeholder="Введите здесь" />
              <Form.Text className="text-muted">И не забудьте про зерно</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Избегайте просроченного зерна" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Я лоялен/лояльна к гулям" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Степень интенсивности вашего оперения</Form.Label>
              <Form.Range />
            </Form.Group>
            <InputGroup style={{ marginBottom: 50 }}>
              <InputGroup.Text>Пожелания по зерну</InputGroup.Text>
              <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>
            <Button variant="primary" type="submit" onClick={onSubmit}>
              Зарегистрироваться
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}
