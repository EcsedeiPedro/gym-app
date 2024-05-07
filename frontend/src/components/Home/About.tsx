import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import AboutImage from '../../../public/about-image.png'
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link';

export default function About() {
  return (
    <section className='py-[80px] bg-dark-gray flex'>
      <div className="container">
          <Row className="relative bg-less-dark-gray pl-12 rounded-md pr-0 items-center about-drop-shadow">
            <Col md={6} className="flex flex-col gap-[24px] text-white px-4">
              <h2 className="title-font">Sobre</h2>
              <p>Potter ipsum wand elf parchment wingardium. Headmaster dervish restricted toad-like headmaster find granger clean hat biting. 
              Butter easy cloak hall treacle scales ground. Section bathroom cadogan trelawney silver kidney black. 
              Hungarian back doe scabbers frisbees shunpike potter chess. Devil’s witch thestral voldemort drills hand. 
              You mcgonagall floor them daily them honeydukes.</p>
              <Link href="/" className="flex items-center gap-2 text-white hover:opacity-50">Saiba Mais <ArrowRightIcon/></Link>
            </Col>

            <Col md={6} className="flex justify-end h-full px-0">
              <Image className="rounded-md" src={AboutImage} alt=""/>
            </Col>
          </Row>
        </div>
    </section>
  )
}