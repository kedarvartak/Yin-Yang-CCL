import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Marthree() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1
                className="text-4xl sm:text-5xl font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                चिनी भाषा जाणणार्‍यांसाठीच्या विविध संधी
              </h1>
              <p
                className="text-lg sm:text-xl text-gray-600 mb-4"
                style={{ fontFamily: 'Quicksand' }}
              >
                चिनी भाषा शिकणाऱ्यांना उपलब्ध असलेल्या विविध संधींची माहिती.
              </p>
              {/* Author Information */}
              <p
                className="text-sm sm:text-base text-gray-700 italic"
                style={{ fontFamily: 'Quicksand' }}
              >
                लेखक: Yashodhara Gadgil
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-5xl">
            <article className="prose lg:prose-xl mx-auto text-gray-700">
              <h2
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                चिनी भाषा शिकून मिळणाऱ्या संधी
              </h2>
              <p>
                पूर्वी एकच पदवी घ्या आणि त्या जोरावर उत्तम नोकरी मिळवा हे सूत्र आपल्याकडे वापरलं जायचं. जसं जसं जग बदललं तसं अधिक व वेगळे ज्ञान मिळवण्याची गरज वाढली. फक्त एक पदवी घेण्याबरोबरच त्याला लागणारी पूरक ज्ञान मिळवणे हे आता अत्यावश्यक झाले आहे.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                1. अभियांत्रिकी
              </h3>
              <p>
                चीनमध्ये मोठ्या प्रमाणावर मशिनरीचे उत्पादन होते, आणि अनेक भारतीय कंपन्या त्यावर अवलंबून असतात. चिनी भाषा येणाऱ्या अभियंता (इंजिनियर) साठी मोठ्या प्रमाणावर संधी उपलब्ध असतात, विशेषत: पुणे जवळच्या औद्योगिक क्षेत्रांमध्ये.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                2. मायक्रो बायोलॉजी
              </h3>
              <p>
                चीनमध्ये मायक्रो बायोलॉजी क्षेत्रात मोठी प्रगती झालेली आहे. यामध्ये, चिनी भाषा शिकलेल्यांना चांगल्या संधी मिळतात, विशेषत: तंत्रज्ञान आणि संशोधनात.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                3. कॉमर्स
              </h3>
              <p>
                जगातल्या बहुतेक वस्तू चीनमध्ये तयार होतात. चिनी कंपन्या आणि त्यांची माहिती संकलित करण्यासाठी, कॉमर्सची पार्श्वभूमी असलेले चिनी भाषा जाणणारे व्यक्ती महत्वाची भूमिका बजावतात.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                4. कायदा
              </h3>
              <p>
                चिनी भाषा शिकलेले आणि कायद्याचे ज्ञान असलेल्या व्यक्तींना चिनी कंपन्यांसोबतच्या करारांमध्ये सल्लागार म्हणून काम करण्याच्या मोठ्या संधी आहेत.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                5. कलाक्षेत्र (आर्ट्स)
              </h3>
              <p>
                आंतरराष्ट्रीय संबंध, राजनैतिक संबंध, आणि मानवाधिकार या क्षेत्रात चिनी भाषा शिकलेल्या विद्यार्थ्यांना विविध संधी मिळतात. ते भाषांतरकार आणि दुभाषा म्हणून काम करू शकतात.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                6. सांस्कृतिक देवाणघेवाण
              </h3>
              <p>
                समाजशास्त्र आणि मानसशास्त्र शिकणाऱ्या विद्यार्थ्यांसाठी चिनी भाषा शिकल्यास सांस्कृतिक देवाणघेवाण क्षेत्रात अनेक संधी मिळतात.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                7. पर्यटन
              </h3>
              <p>
                चिनी पर्यटकांना भारतातील पर्यटन स्थळे समजावून देण्यासाठी आणि भारतीय पर्यटकांना चीनच्या पर्यटन स्थळांवर मार्गदर्शन करण्यासाठी चिनी भाषा येणाऱ्यांची मोठी मागणी आहे.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                8. योग व फिटनेस
              </h3>
              <p>
                योगशिक्षकांना चीनमध्ये संधी आहेत. जरी योग शिकवणे भाषाशिवाय शक्य असले तरी चिनी भाषा येणारे शिक्षक त्यांच्या शिकवण्याच्या तत्त्वज्ञानाचा प्रभावीपणे प्रचार करू शकतात.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                9. आयुर्वेद
              </h3>
              <p>
                चीनमध्ये पारंपारिक औषधांचा मोठा वापर आहे, आणि आयुर्वेद शिकलेले आणि चिनी भाषा जाणणारे व्यक्ती आयुर्वेदाचा प्रचार करण्यास सक्षम असतात.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                10. व्यापार क्षेत्र
              </h3>
              <p>
                चीनमध्ये व्यापार करणाऱ्यांसाठी चिनी भाषा येणारे व्यक्ती आवश्यक आहेत. व्यापाराच्या संधी मिळवण्यासाठी, चिनी वस्तूंचे भारतात आयात करणे आणि त्यासाठीच्या नियमांचे पालन करणे महत्वाचे असते.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                11. भाषेचे प्रशिक्षण
              </h3>
              <p>
                चिनी भाषेच्या प्रशिक्षणासाठी शिक्षकांची मोठी मागणी आहे, विशेषत: लहान मुलं आणि कॉर्पोरेट कंपन्यांसाठी.
              </p>

              <h3
                className="font-bold text-teal-600 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                12. सशस्त्र सेना आणि सुरक्षा
              </h3>
              <p>
                भविष्यात, सशस्त्र सेना आणि सुरक्षा क्षेत्रातही चिनी भाषेचे ज्ञान असणाऱ्यांना नोकरीच्या संधी मिळू शकतात.
              </p>
              <div className="text-center mt-8">
                <Link to="/blogs">
                  <button
                    className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                    style={{ fontFamily: 'Quicksand' }}
                    aria-label="Back to Blogs"
                  >
                    Back to Blogs
                  </button>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
