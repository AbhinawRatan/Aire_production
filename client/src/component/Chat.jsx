import React from 'react';

const Chat = () => {
  const examples= [
    'Inroduce yourseflf',
    'Copy and Paste your resume',
    'Describe the job role to AI',
    'What are your weaknesses?',
    'Why do you want this job?',
    'Why should we hire you?',
    'What is your greatest accomplishment?',

  ]
  const Chatt = [
    {
    role: 'user',
    message: 'I want to give interview for react'
  },
  {
    role: 'assistant',
    message: 'I can help you with that. Here are some basic questions'
  },
  {
    role: 'user',
    message: 'How to use componets featuer of react'
  },
  {
    role: 'assistant',
    message: 'Here is an example: abhinaw.live'
  }
  ] 
  return (
    <div className="h-screen w-screen flex bg-[#050509] ">
      <div className="w-[20%] h-screen bg-[#0c0c15] text-white p-4 overflow-y-hidden hide-scroll ">
        <div>
          <button className="w-full h-[50px] border rounded bg-slate-600 over">
            + New Interview
          </button>
        </div>
        <div className="h-[70%] mt-8 shadow-lg overflow-y-auto hide-scroll-bar mb-4 gradient-04">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <div className="py-3 text-center rounded mt-4 text-lg font-light flex items-center px-8 hover:bg-slate-600 cursor-pointer">
              <span className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-message"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M8 9h8"></path>
                  <path d="M8 13h6"></path>
                  <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5.5l-3 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path>
                </svg>
              </span>
              <span>Past interviews</span>
            </div>
          ))}
        </div>
        <div>
          <div className="overflow-y-scroll shadow-lg hide-scroll-bar h-[20%] border-t">
            {[1, 2, 3].map((item, index) => (
              <div className=" py-3 text-center rounded mt-4 text-lg font-light flex items-center px-8 hover:bg-slate-600 cursor-pointer">
                <span className=" mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-settings-code"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M11.482 20.924a1.666 1.666 0 0 1 -1.157 -1.241a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.312 .318 1.644 1.794 .995 2.697"></path>
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M20 21l2 -2l-2 -2"></path>
                    <path d="M17 17l-2 2l2 2"></path>
                  </svg>
                </span>
                Code Settings
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[80%]  ">
        {Chatt.length > 0 ? (
          <div className="h-[80%] overflow-scroll hide-scroll-bar text-white pt-8">
            {Chatt.map((items, index) => (
              <div className={`w-[60%]  mx-auto p-6 flex  ${items.role === 'assistant' && 'bg-slate-900 rounded'}`}>
                <span className='mr-8 p-2 bg-slate-500 rounded-full h-full'>
                  {items.role === "assistant" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-users-plus"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4c.96 0 1.84 .338 2.53 .901"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      <path d="M16 19h6"></path>
                      <path d="M19 16v6"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-message-chatbot"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"></path>
                      <path d="M9.5 9h.01"></path>
                      <path d="M14.5 9h.01"></path>
                      <path d="M9.5 13a3.5 3.5 0 0 0 5 0"></path>
                    </svg>
                  )}
                </span>
                <div className='leading-loose'>{items.message}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[80%]  flex flex-col justify-center items-center text-white gradient-04">
            <div className="text-4xl font-bold mb-8">Aire</div>
            <div className=" flex flex-wrap justify-around max-w-[900px]">
              {examples.map((items, index) => (
                <div className="text-lg font-light mt-4 p-4  rounded cursor-pointer hover:bg-slate-800 min-[400px] ">
                  {items}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className=" h-[20%]">
          <div className=" flex flex-col items-center justify-center w-full h-full text-white">
            <div className=" w-[60%] flex justify-center relative">
              <input
                type="text"
                className=" w-full rounded-lg p-4 pr-16 bg-slate-800 text-white"
                placeholder="Type your message here..."
              />
              <span className=" absolute right-4 top-4 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-telegram"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
                </svg>
              </span>
            </div>
            <small className=" text-slate-500 mt-2">
              AI is still in beta testing.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;