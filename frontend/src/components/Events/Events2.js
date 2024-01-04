import React,{useState} from 'react';
import EventCard from './EventCard';
import bg1 from "../../assets/events/event_bg.png"
import wish_tree from "../../assets/events/wish_tree.jpeg"
import RegisterForm from './RegisterForm';
import blood_donate from "../../assets/events/blood_donate.jpg"
import tree_plant from "../../assets/events/tree_plantation.jpg"
import daan_utsav from "../../assets/events/daan_utsav.jpg"
import vigyasa from "../../assets/events/vigyasa.jpg"
import guest_lec from "../../assets/events/guest_lec.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Prayaas_Report from "../../assets/Prayaas_Report.pdf"

function Events() {
  const [ reg, Setreg] = useState(false)
  const [ename,Setename] = useState("");
  function getReg(x,ename){
    Setreg(x)
  Setename(ename);

  }
 
  return (
    <>
   
    <div className='event-cont ' >
    <img className='event-page-pic' src={bg1}/>
       <div className='event-title'>Events at Prayaas</div>
       <a className='report-button' href={Prayaas_Report} download="Prayaas Report" target='_blank'>
      <button className='btn'>Prayaas Report</button>
      </a>
    </div>
    { reg && <RegisterForm getReg={getReg} ename={ename}/>}
    <EventCard img={daan_utsav} register={false} getReg={getReg} 
     details={{name:"Daan Utsav", date:"12/4/23", 
    para:"Daan Utsav, also known as the Joy of Giving Week, is  an event conducted by the NGO Goonj all over India. It runs for eight days every year. It is an initiative where people are encouraged to donate their old, usable belongings. This material is then distributed among needy people. The Prayaas Club helps the NGO conduct it in Nagpur.Before the event begins, the members of the Prayaas Club distribute pamphlets in parks and other public places, telling people more about the event and urging them to come forward and donate. About 20 centres are set up across Nagpur, two in VNIT, to receive the donated material. 	At the end of the event, the collected material is sorted into different categories. These include Men's clothes, Women's clothes, Children's clothes, Utensils, Blankets and many more. This sorted material is then sent to Goonj's headquarters in Delhi. From there, the material is placed in kit bags and distributed among needy people."}}  />
   
   <EventCard img={blood_donate} register={false} getReg={getReg} 
     details={{name:"Blood Donation", date:"12/4/23", 
    para: "We PRAYAAS club conduct BLOOD DONATION camp in our institute every year on the occasions of Republic day and Independence day in collaboration with NMC Blood Bank, Government medical college, and Indira Gandhi Medical college which are known to be the prominent medical colleges in the city. This is our effort to contribute our best towards saving lives of people. VNIT students, professors and nagpurkars donate blood as a sign of patriotism and kindness on these days."}}       />

    <EventCard img={guest_lec} register={false} getReg={getReg} 
     details={{name:"Guest Lecture", date:"12/4/23", 
    para: "Prayaas Club not just contributes to social causes but also inspires others to do so. We host  a lot of guest lectures throughout the year. Guests with their expertise in different social activities share their wisdom and experience with the students . And we receive a lot of good responses and support for this. Recently in August 2022 Mr. Amrut Bang sir visited VNIT campus for guest lecture and shared information about his initiative of NIRMAN, a framework for flourishing life."}}       />

    <EventCard img={vigyasa} register={false} getReg={getReg} 
     details={{name:"Vigyaasa", date:"12/4/23", 
    para: "Vigyaasa is an initiative by the Prayaas Club to instill curiosity in young minds and provide a platform for underprivileged students to showcase their problem-solving skills. The students from government schools visit VNIT with their projects, and the institute rewards the group with the best project. A few days before the event, the club members visit government schools near the college, meet the principals, and explain the initiative. The interested students are then interviewed, and the selected students are divided into groups. Some students from the club act as 'mentors' for the students participating from the school. These mentors visit the school regularly, helping the students with the scientific concepts, checking on the model progress, and motivating the students. The club invites Honourable Director of VNIT and other professors and Dean's to attend the program and grade the projects. On the day of the event, the mentors escort the participating students to the college with their projects. Here, they explain the ideas behind their projects and answer the questions that the grading team asks. The program ends with the announcement of the winners and a prize distribution ceremony. The students are then given a college tour before being escorted back to their schools."}}       />

    <EventCard img={wish_tree} register={false} getReg={getReg} 
     details={{name:"Wish Tree", date:"12/4/23", 
    para: "We all grown up with the infinite wishes in our minds. Some of them were fulfilled and some are the one for which we are working hard. At the initial stages of our life we have got immense support from our parents to fullfill our wishes and we are fortunate for that. But not everyone in the society get that amount of support and belief. For them we the Prayas team of VNIT, Nagpur are trying to help to know the wishes and fulfilling them with the best of our capabilities.Prayaas club members go to various NGOs, Orphanages, government schools etc to  interact with the children, know their wishes ,collect them with their names and other details and Hang the Wish cards on Our 'Wish tree'.The wishes kept hanging on the tree for people, professors, students of our college read them and whoever is wanting to help them they Fulfill the wish.Prayaas team always work their best for helping the society and spreading the social awareness. Wish tree is one such event of Prayas of helping the society."}}       />

    <EventCard img={tree_plant} register={false} getReg={getReg} 
     details={{name:"Tree plantation", date:"12/4/23", 
    para: "Planting a tree might sound tedious but it is actually more interesting in action. We, Prayaas the social club of VNIT celebrate on Independence Day by adding a philanthropic touch to it. We have pledged to make the campus greener by planting more trees and we have planted a total of 81 saplings in the premises of VNIT and still going on. DR. PM Padole Sir, the director of VNIT Nagpur, enthusiastically took part in this event, as did Peshwe Sir and Gopi Nimbarte Sir, the teacher in charge of the prayaas club. Many students gather and make this event successful."}}       />
   
    </>
  )
}

export default Events

