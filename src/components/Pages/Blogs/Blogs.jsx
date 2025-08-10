import React from 'react';

const Blogs = () => {
    return (
        <div className='w-11/12 mx-auto border border-[#176AE5] rounded-4xl border-dotted p-5'>
          <h1 className='text-center text-3xl font-bold'>Blogs</h1>
          <div className='bg-white rounded-3xl p-5 my-5'>
            <h2 className='text-2xl font-semibold'>Q1: What is useState and how does it work in React?</h2>
            <p className='text-lg font-light'><span className='font-medium'>Answer:</span> useState is a React Hook that let us add state variables to functional components.
                Using useState we can store and update values directly inside a function.
            </p>
          </div>
          <div className='bg-white rounded-3xl p-5 my-5'>
            <h2 className='text-2xl font-semibold'>Q2: What is the purpose of useEffect in React?</h2>
            <p className='text-lg font-light'><span className='font-medium'>Answer:</span> In react useEffect works as a hook for handling side effects in functional components</p>
          </div>
          <div className='bg-white rounded-3xl p-5 my-5'>
            <h2 className='text-2xl font-semibold'>Q3: What is a custom hook in React and when should you use one?</h2>
            <p className='text-lg font-light'><span className='font-medium'>Answer:</span> In React a custom hook is a javaScript function that uses other React hooks inside.Custom hook name starts with "use". <br />#Reason to use:
            <ul style={{ listStyleType: "disc" }} className='pl-5'>
                <li>Reusable</li>
                <li>Easier to maintain</li>
                <li>Ensure Clean and readable code</li>
            </ul></p>
          </div>
          <div className='bg-white rounded-3xl p-5 my-5'>
            <h2 className='text-2xl font-semibold'>Q4: Difference between controlled and uncontrolled components? Which one is better?</h2>
            <p className='text-lg font-light'><span className='font-medium'>Answer:</span> In controlled component React state controls the input value and in uncontrolled component input value in managed by the DOM.
            Controlled Componet are easier to validate and manage and uncontrolled component are harder to control and validate <br />Controlled Component are easier to validate and manage so they are better in most case.</p>
          </div>
          <div className='bg-white rounded-3xl p-5 my-5'>
            <h2 className='text-2xl font-semibold'>Q5: Tell us something about useFormStatus() (explore and explain)</h2>
            <p className='text-lg font-light'><span className='font-medium'>Answer: </span>useFormStatus() is a React hook used inside form components to track the current submission state of a form.</p>
          </div>
        </div>
    );
};

export default Blogs;