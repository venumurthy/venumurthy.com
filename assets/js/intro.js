/*=============== For Typing the Intro Text===============*/
var text = "Dr. Venu has successfully led the development of mission-critical applications across diverse industries, revolutionizing sectors such as healthcare with HIPAA-compliant products and architecting resilient systems for international airports. \n Additionally, I have a proven track record of migrating legacy systems to the cloud, unlocking scalability, agility, and cost-effectiveness for organizations. \n Drawing from my extensive experience across various domains, I possess deep insights into the unique challenges and opportunities they present. This adaptability allows me to excel in any industry, bringing valuable expertise and fresh perspectives to every project. \n As a visionary leader, I anticipate industry trends and drive strategic initiatives that push the boundaries of innovation. I foster a collaborative culture, empowering teams to reach their full potential and achieve remarkable outcomes. \n With an unwavering commitment to excellence, I continue to make a significant impact as a CTO and Executive Director. My passion for technology, combined with my extensive experience, positions me as a trusted advisor and influential leader in the digital landscape. Let's shape the future and achieve unprecedented success together.";
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