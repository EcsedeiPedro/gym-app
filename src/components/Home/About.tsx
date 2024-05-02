import { ArrowRightIcon } from 'lucide-react';
import { Col, Row } from 'react-bootstrap';

export default function About() {
  return (
    <section className='about'>
      <div className="container">
        <div className='content'>
          <Row>
            <Col md={7} className='text-content'>
              <h2>Sobre</h2>
              <p>Potter ipsum wand elf parchment wingardium. Headmaster dervish restricted toad-like headmaster find granger clean hat biting. Butter easy cloak hall treacle scales ground. Section bathroom cadogan trelawney silver kidney black. Hungarian back doe scabbers frisbees shunpike potter chess. Devil’s witch thestral voldemort drills hand. You mcgonagall floor them daily them honeydukes.</p>
              <p>Saiba Mais <ArrowRightIcon/></p>
            </Col>

            <Col md={5} className='picture-background' />
          </Row>
        </div>
      </div>
    </section>
  )
}