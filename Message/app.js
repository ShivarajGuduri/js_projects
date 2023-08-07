const heading = document.querySelector("#head");
const input = document.querySelector("#username");
const greetingContainer = document.querySelector("#greeting-container");

const messages = [
  "Hello, {name}! it's been too long! Let's set aside time for a movie night or game session soon. Your positive energy always lifts my spirits, and I miss our hangouts. Can't wait to catch up!",
  "Hey  {name}!, sending you a virtual hug! I appreciate your constant support and understanding. We should plan a chill day at the park or have a cozy Netflix marathon. You're an incredible friend!",
  "What's up, {name} You're the life of every party! I miss dancing and laughing with you. Let's organize a small get-together or hit the dance floor soon. Can't wait to groove together!",
  "Hey {name}!, hope you're doing well! You're the epitome of kindness and empathy. Let's grab coffee and have a heart-to-heart chat. Your wisdom always enlightens me!",
  "Hey {name}, it's been too quiet without you around. Let's plan a spontaneous road trip or visit that new art exhibition together. Your creativity always inspires me!",
  "What's cooking, {name}? I miss our culinary experiments and delicious feasts. Let's plan a cooking day and surprise our taste buds. Can't wait to savor your masterpieces again!",
  "Hey {name}, you're my adventure buddy! I miss our adrenaline-filled escapades. Let's go on a thrilling hike or try out an extreme sport. Our memories are waiting to be expanded!",
  "Hey {name}, you're the voice of reason in my life. Let's meet up for a long walk and discuss our dreams and aspirations. Your insights are always valuable!",
  "What's cracking, {name}? I miss our gaming nights and friendly competitions. Let's challenge each other to a gaming marathon soon. Get your controller ready!",
  "Hey {name}, you're the comedian of the group! I miss our laugh-out-loud moments. Let's plan a comedy show night or attend a live performance. Your humor is unbeatable!",
  "Hey {name}! It's been too long since we caught up. Let's plan a coffee date soon. I miss our deep conversations and laughter. Life has been busy, but I cherish our friendship. Can't wait to see you again!",
  "Hey {name}, hope you're doing well! Just wanted to remind you how much your friendship means to me. You're always there with a listening ear and a caring heart. Let's hang out this weekend and create more awesome memories together!",
  "What's up, {name}? You're the coolest friend I know! I'm grateful for all the fun adventures and crazy moments we've shared. Let's plan another epic outing soon maybe a hiking trip or trying out that new restaurant we've been eyeing!"

];

input.addEventListener("input", function (e) {
  const username = input.value.trim();

  if (username === "") {
    heading.innerText = "Enter Your Username";
    greetingContainer.innerHTML = ""; // Clear the greeting container
  } else {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const selectedMessage = messages[randomIndex].replace("{name}", username);

    heading.innerText = "Welcome, " + username;

    // Create and set the greeting
    const greeting = document.createElement("p");
    greeting.innerText = selectedMessage;

    greetingContainer.innerHTML = ""; // Clear the greeting container
    greetingContainer.appendChild(greeting); // Add the greeting to the container
  }
});
