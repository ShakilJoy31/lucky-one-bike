import React from 'react';
import './QuestionAnswer.css'; 

const QuestionAnswer = () => {
    return (
        <div className='total-answer'>
            <div className='react-work'>
                <h1>How react works</h1>
                <p>রিয়্যাক্ট হচ্ছে জাভাস্ক্রিপ্ট এর একটি লাইব্রেরি। আমরা এটিকে ফ্রেইমওয়ার্ক বলতে পারি না। এই লাইব্রেরি টা উইজার ইন্টারফেইস তৈরি করে ইফিশিয়েন্ট ও ডিক্লারেটিভ ওয়ে তে। আমরা যদি কোনো সিঙ্গেল পেইজ এপ্লিকেশন তৈরি করতে চাই বা মোবাইল এপ তৈতি করতে চাই তাহলে আমরা তা রিয়্যাক্ট দিয়ে খুব সহজেই তৈরি করতে পারবো। রিয়্যাক্ট আমাদের নিজস্ব কম্পোনেন্ট তৈরি করে কোড গুলাকে কাস্টমাইজ করার সুযোগ করে দেয়। রিয়্যাক্টে অনেক বিল্ট ইন ফাংশনালিটি থাকে যা আমাদের কোনো ইউজার ইন্টারফেইস তৈরি করাকে তীর্বভাবে ত্বরান্বিত্য করে। কম্পোনেন্ট  আমাদের একটি ছদ্ববেশি এইচ টি এম এল রিটার্ন করে।  আমরা কোনো কম্পোনেটে কোড ও ছদ্ববেশি এইচ টি এম এল এর মিশ্রন ঘটিয়ে কাংখিত প্রজেক্ট সহজেই করতে পারি। দরকার সুধু মাথা ঠান্ডা করে চিন্তাশক্তির প্রপ্সার ঘটানো।  একটা গুরুত্বপুর্ন কথা হলো কম্পোনেন্টের নাম এর প্রথম অক্ষর অবশ্যই অবশ্যই বড় হাতের অক্ষরে লেখা বাঞ্চনীয়।</p>
            </div>

            <div>
                <h1>Difference between props and state.</h1>
                <div className='state-props'>
                    <div className='props'>
                        <h3>Props</h3>
                        <p>Props is a short form of property. If I say simply, props is used for passing object that are sent by the component through attribute. <br /><br /> Actually when we want to have data from external environment like another component or anything else we have to use props. </p>
                    </div>
                    <div className='state'>
                        <h3>State</h3>
                        <p>State is accessible only in a component. If we want to get access outside of the component, we can't. keeping track of the data in any component we use state. The data we set to the setState automatically got set to the state and we can use the variable. We, know there is to data. First one is variable and the second one is a function. <br /><br /> If we want to pass that state that is being countiniously changed by the setState function then we need to pass it as props.  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionAnswer;