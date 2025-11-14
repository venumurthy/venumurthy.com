/*=============== For Typing the Intro Text===============*/
var text = "Recognized as one of the world's best CTOs, Dr. Venu Murthy has 22+ years of unparalleled experience leading digital transformation for rapidly growing businesses. \n As a Forbes Technology Council member, I have successfully led the development of mission-critical applications worth over $100M, revolutionizing healthcare with HIPAA-compliant platforms and architecting resilient cloud-native systems for international airports. \n My innovation in hybrid cloud architecture secured a $100M project win at ThoughtWorks, demonstrating my ability to translate cutting-edge technology into business value. I have successfully guided startups from conception to exit, building and scaling teams from zero to 100+ engineers across multiple geographies. \n With expertise spanning cloud computing, enterprise architecture, cybersecurity, and AI/ML, I transform legacy systems into modern, scalable architectures that unlock unprecedented growth. My strategic vision combines deep technical expertise with exceptional business acumen, enabling organizations to achieve remarkable outcomes. \n As a trusted advisor and influential technology leader, I continue to shape the future of digital transformation, empowering teams to reach their full potential and delivering exceptional results that position companies as industry leaders.";
var speed = 100; // Speed of typing (in milliseconds)
var element = document.getElementById("typing-text");
var index = 0;

function typeText() {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  } else {
    setTimeout(resetText, 1000); // Delay before resetting the text
  }
}

function resetText() {
  element.textContent = ""; // Clear the content
  index = 0; // Reset the index
  setTimeout(typeText, speed); // Start typing again
}

typeText();