import { Row, Col } from "react-bootstrap";

export default function BannerHome() {
  return (
      <section className="banner">
          <div className="container">
              <Row>
                  <Col className="content" md={6}>
                      <h1>Potter ipsum wand elf parchment wingardium.</h1>

                      <a className="button">crie seu treino</a>
                  </Col>
              </Row>
          </div>
      </section>
  )
}