import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Marone() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-teal-600 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                चिनी भाषा कोणी शिकावी व परीक्षांबद्दलची माहिती
              </h1>
              <p className="text-lg sm:text-xl text-gray-600" style={{ fontFamily: 'Quicksand' }}>
                चीनी भाषा शिकण्यासाठी आवश्यक माहिती आणि प्राविण्याच्या परीक्षांविषयी तपशील.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-5xl">
            <article className="prose lg:prose-xl mx-auto text-gray-700">
              <h2 className="font-bold text-teal-600" style={{ fontFamily: "'Playfair Display', serif" }}>
                भाषा शिकण्यासाठी योग्य वेळ कोणती?
              </h2>
              <p>
                भाषा शिकण्यासाठी खरंतर वयाची कोणतीच अट नसते. परदेशी भाषा शिकताना प्रत्येक जणच त्या भाषेच्या बालवाडीत असतो. अंक, फळे-फुले, रंग यासाठीचे शब्द सर्वच वयोगटातील विद्यार्थी सुरुवातीला शिकतात. हळूहळू त्यात आवश्यक शब्दांच्या गरजेनुसार फरक पडत जातो.
              </p>
              <h3 className="font-bold text-teal-600" style={{ fontFamily: "'Playfair Display', serif" }}>
                चिनी भाषेचे विशेष गुण
              </h3>
              <p>
                चीनी भाषेचे स्वरूप थोडे वेगळे असल्याकारणाने काही ठराविक गुण वैशिष्ट्ये असल्यास ही भाषा थोडी जास्त पटकन येऊ शकते. चिनी भाषेत चित्रलिपी आहे. अनेक जणांची व्हिज्युअल मेमरी जास्त चांगली असते, त्यामुळे ही चित्रलिपी पटकन शिकता येते.
              </p>
              <p>
                लहान मुलांना टीव्हीवरच्या जाहिराती चटकन पाठ होतात. चिनी भाषा ही टोनल असल्याने त्यातील उच्चारातील हेलकावे लहान मुले पटकन लक्षात ठेवतात आणि भाषा पटकन बोलता येते.
              </p>

              <h3 className="font-bold text-teal-600" style={{ fontFamily: "'Playfair Display', serif" }}>
                वय आणि अनुभव
              </h3>
              <p>
                अनेक व्यावसायिक कामानिमित्त चीनमध्ये जात असतात आणि तिथे चिनी भाषा कानावर पडल्याने ते लवकर रिलेट करू शकतात. तसेच चिनी सरकार सर्व वयोगटांसाठी वेगवेगळ्या प्राविण्य परीक्षा आयोजित करते.
              </p>

              <h3 className="font-bold text-teal-600" style={{ fontFamily: "'Playfair Display', serif" }}>
                चिनी भाषेच्या परीक्षा
              </h3>
              <p>
                चिनी सरकार बारा वर्षांपर्यंतच्या मुलांसाठी यूथ चायनीज टेस्ट नावाच्या 1 ते 4 पातळीच्या परीक्षा आयोजित करते. तेरा वर्षे पूर्ण झाल्यानंतर, मुले एच एस के नावाच्या मोठ्या माणसांच्या परीक्षांना बसू शकतात, ज्यात 1 ते 6 पातळ्या असतात.
              </p>
              <p>
                चिनी भाषेत एक ते तीन या एच एस के पातळ्या आहेत, ज्यात तोंडी आणि लेखी परीक्षा दिल्या जातात. त्यानंतर, ज्यांना व्यावसायिक स्तरावर चीनी भाषेचे ज्ञान हवे असते, ते बिझनेस चायनीज टेस्ट देऊ शकतात.
              </p>

              <h3 className="font-bold text-teal-600" style={{ fontFamily: "'Playfair Display', serif" }}>
                शिष्यवृत्ती आणि अभ्यासक्रम
              </h3>
              <p>
                चिनी सरकार कन्फ्यूशियस स्कूलच्या मार्फत काही शिष्यवृत्त्या भारतीय विद्यार्थ्यांना देते. साधारणपणे तिसरी परीक्षा उत्तीर्ण झाल्यानंतर सहा महिन्यांची, आणि चौथी परीक्षा झाल्यानंतर एका वर्षाची शिष्यवृत्ती दिली जाते.
              </p>
              <p>
                या शिष्यवृत्तीच्या माध्यमातून, चिनी विद्यापीठे उन्हाळ्यात दोन-तीन आठवड्यांची शिबिरे आयोजित करतात ज्यात चिनी संस्कृती आणि भाषेचे शिक्षण दिले जाते.
              </p>

              <h3 className="font-bold text-teal-600" style={{ fontFamily: "'Playfair Display', serif" }}>
                विदर्भ-मराठवाड्यातील परिस्थिती
              </h3>
              <p>
                सध्या विदर्भ मराठवाडा येथील विद्यार्थ्यांमध्ये चीनमध्ये जाऊन तेथे मेडिकलचे शिक्षण घेण्याचा कल खूप वाढला आहे. मात्र, ज्या विद्यार्थ्यांना इंग्रजीचे पुरेसे ज्ञान नाही, त्यांच्याकडून इंग्रजी मधून शिकणे योग्य आहे का याचा विचार करणे आवश्यक आहे.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
