const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const API_KEY = ""; // Paste your API key here
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">psychiatry</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    // Define the properties and message for the API request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", 
            content: `You are a finance expert and you will answer the following messages or questions based on your knowledge. 
            Make sure that your answer is short and precise. 
            The message is ` + userMessage}],
        })
        
    }
    

    // Send POST request to API, get response and set the reponse as paragraph text
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content.trim();
    }).catch(() => {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));

    
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if(!userMessage) return;


    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

   

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));


/*
// script.js 
// Get form, expense list, and total amount elements 
const expenseForm = 
	document.getElementById("expense-form"); 
const expenseList = 
	document.getElementById("expense-list"); 
const totalAmountElement = 
	document.getElementById("total-amount"); 

// Initialize expenses array from localStorage 
let expenses = 
	JSON.parse(localStorage.getItem("expenses")) || []; 

// Function to render expenses in tabular form 
function renderExpenses() { 

	// Clear expense list 
	expenseList.innerHTML = ""; 

	// Initialize total amount 
	let totalAmount = 0; 

	// Loop through expenses array and create table rows 
	for (let i = 0; i < expenses.length; i++) { 
		const expense = expenses[i]; 
		const expenseRow = document.createElement("tr"); 
		expenseRow.innerHTML = ` 
	<td>RM {expense.name}</td> 
	<td>$RM {expense.amount}</td> 
	<td class="delete-btn" data-id="${i}">Delete</td> 
	`; 
		expenseList.appendChild(expenseRow); 

		// Update total amount 
		totalAmount += expense.amount; 
	} 

	// Update total amount display 
	totalAmountElement.textContent = 
		totalAmount.toFixed(2); 

	// Save expenses to localStorage 
	localStorage.setItem("expenses", 
		JSON.stringify(expenses)); 
} 

// Function to add expense 
function addExpense(event) { 
	event.preventDefault(); 

	// Get expense name and amount from form 
	const expenseNameInput = 
		document.getElementById("expense-name"); 
	const expenseAmountInput = 
		document.getElementById("expense-amount"); 
	const expenseName = 
		expenseNameInput.value; 
	const expenseAmount = 
		parseFloat(expenseAmountInput.value); 

	// Clear form inputs 
	expenseNameInput.value = ""; 
	expenseAmountInput.value = ""; 

	// Validate inputs 
	if (expenseName === "" || isNaN(expenseAmount)) { 
		alert("Please enter valid expense details."); 
		return; 
	} 

	// Create new expense object 
	const expense = { 
		name: expenseName, 
		amount: expenseAmount, 
	}; 

	// Add expense to expenses array 
	expenses.push(expense); 

	// Render expenses 
	renderExpenses(); 
} 

// Function to delete expense 
function deleteExpense(event) { 
	if (event.target.classList.contains("delete-btn")) { 

		// Get expense index from data-id attribute 
		const expenseIndex = 
			parseInt(event.target.getAttribute("data-id")); 

		// Remove expense from expenses array 
		expenses.splice(expenseIndex, 1); 

		// Render expenses 
		renderExpenses(); 
	} 
} 

// Add event listeners 
expenseForm.addEventListener("submit", addExpense); 
expenseList.addEventListener("click", deleteExpense); 

// Render initial expenses on page load 
renderExpenses();
*/
