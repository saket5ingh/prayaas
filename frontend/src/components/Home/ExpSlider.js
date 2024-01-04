import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import ExpCard from "./ExpCard";

export default function ExpSlider() {
  return (
    <>
      <Swiper
      style={ {width: "90vw",
        height: "100%"}}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><ExpCard content="I still vividly remember my first day as a member of the Prayaas club for a blood donation program. I joined the club because, unlike others, there were no auditions, and anyone could join. Starting as a normal member, I gradually progressed and got involved in planning and organizing events for the club. My journey with the club has been remarkable, and I can proudly say that it has helped me become a better version of myself as I got a lot of amazing opportunities to learn skills such as communication, teamwork, event planning, and guiding other members of prayaas.
Prayaas taught me that giving back is not just about money, but also about the consistent effort one puts in over time to do something impactful. When we celebrate festivals such as Raksha Bandhan and Diwali with children from orphanages, the happiness in their eyes is the most valuable reward that I can get, surpassing any material reward. I was able to achieve all this because of the support of my fellow batchmates and juniors in the club. Without them, my experience wouldn't have been as colorful."/></SwiperSlide>
        <SwiperSlide><ExpCard content="This club is more like a family for me. Every event works as a stress buster for all of us. When there is smile on others face because of us , that feeling is inexpressible. After a tired day at college when we go for teaching and see the happy faces of children waiting for us all our pain is gone. The only thing which club wants from us is time and nothing else. Being part of this club gives us the opportunity to explore ourselves , interact with others and this club does not restrict us to doing other activities."/></SwiperSlide>
        <SwiperSlide><ExpCard content="Being a part of prayaas itself is a matter of pride for me, it's been a great journey since i joined the Prayaas family. Getting involved with the Prayaas club has led me to build connections among my seniors and juniors which helped me to inculcate various soft skills and gain a new perspective regarding what are the struggles of various sections of the society which are in reduced circumstances. Organizing various Prayaas drives (Daanutsav, Vigyasa, blood donation, wish tree, etc.) was really enjoyable. Definitely going to miss all of these. I am really grateful for being a part of such an adoring family."/></SwiperSlide>
        <SwiperSlide><ExpCard content='"जो अपने लिए जीते हैं उनके जीवन में रोना कभी मिटा नहीं और जो औरों के लिए जीते हैं उनके जीवन में रोना कभी हुआ नहीं।" इस विचार का प्रत्येक शब्द सच लगने लगा जब मैं (वीएनआईटी) में आकर साधारण विद्यार्थी से प्रयासी बना। जहाँ एक ओर बाकी सारे क्लब कोई विशेष कला के आधार पर चलते हैं वहीं प्रयास जीवन जीने की कला को ही अपना आधार मानता है, और वो कला है "परोपकार के लिए जीवन जीना।" जो संतोष किसी अनजान बच्चे को अपना छोटा भाई/बहन समझकर पढ़ाने में मिलता है, और फिर वो बच्चा आपसे पूछता है कि "भैया आप कल आओगे ना" तो उसको हाँ बोलना ही पड़ता है... भले ही मैं जानता हूं कि अगले दिन लैब की वजह से ना जा पाऊं। जो खुशी ठंड से ठिठुरते बदन को ढकने में मिलती है, जो खुशी बच्चों की छोटी छोटी इच्छाएं पूरी करने में, उन्हें नए विज्ञान के उपयोग समझाने में, और रक्तदान से किसी को नया जीवन देने में है वो कहां है कमरे में बैठकर फ़िल्में देखने में या व्यर्थ की चीजों में समय और पैसा बर्बाद करने में। जब मैं ये छोटी सी लेकिन महत्वपूर्ण बात समझ गया, मैं प्रयासी बन गया। 
धन्यवाद | '/></SwiperSlide>
      
      </Swiper>
    </>
  );
}
