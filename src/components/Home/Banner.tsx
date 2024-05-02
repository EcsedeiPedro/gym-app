import Link from "next/link";
import { Row, Col } from "react-bootstrap";

export default function BannerHome() {
  return (
      <section className="mt-[88px] calc-height flex items-center bg-dark-gray">
          <div className="container">
              <Row>
                  <Col className="flex flex-col gap-16" md={6}>
                      <h1 className="text-white text-5xl leading-normal">Potter ipsum wand elf parchment wingardium.</h1>

                      <Link href="/crie-seu-treino" className="bg-purple text-white font-normal text-2xl w-max py-3 px-12 rounded-md uppercase">crie seu treino</Link>
                  </Col>
              </Row>
          </div>
      </section>
  )
}