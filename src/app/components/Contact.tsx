"use client"
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { toast, ToastContainer } from "react-toastify";
import CustomButton from "../lib/Button";
import { Textarea } from "@/components/ui/textarea"

type Inputs = {
  Name: string;
  Email: string;
  Message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = (data) => {
    
    try{
  toast.promise(
        fetch("https://api.apispreadsheets.com/data/SS0SjMo6kLXyvlAz/", {
          method: "POST",
          body: JSON.stringify({
            data: { Name: data.Name, Email: data.Email, Message: data.Message },
          }),
        }).then((res)=>{
          if (res.status === 201) {
  
            reset();
          }
        }),
        {
          pending: 'Sending message...',
          success: 'Message sent successfully!',
          error: 'Error sending message'
        },
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          style: { backgroundColor: "#0cc0df", color: "white" },
        }
      )
    }
    catch(e){
      console.log(e)
      toast.error("Error in sending message", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        style: { backgroundColor: "#0cc0df", color: "white" },
      });
    }
   

  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-sm mt-16 lg:mt-0 flex flex-col gap-4 justify-center rounded-2xl font-roboto "
      >
        <div>
          <h3 className="font-semibold text-3xl">Get in Touch With Us!</h3>
          <p className="text-slate-300 text-sm font-medium mt-2 mb-2">
            Don&apos;t hesitate to contact us for more information or help.
          </p>
        </div>

        {/* Name Field */}
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="Name" className="text-[#475467] font-medium text-sm">
            Name
          </label>
          <Input
            placeholder="Enter Your Name"
            type="text"
            className="global-input"
            {...register("Name", {
              minLength: { value: 3, message: "Name must be at least 3 characters" },
              maxLength: { value: 50, message: "Name must be less than 50 characters" },
              required: "Name is required",
            })}
          />
          {errors.Name && <span className="text-red-500 text-xs">{errors.Name.message}</span>}
        </div>

        {/* Email Field */}
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="Email" className="text-[#475467] font-medium text-sm">
            Email
          </label>
          <Input
            placeholder="Enter Your Email"
            type="email"
            className="global-input"
            {...register("Email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Wrong email format",
              },
            })}
          />
          {errors.Email && <span className="text-red-500 text-xs">{errors.Email.message}</span>}
        </div>

        {/* Message Field */}
        <div className="flex flex-col space-y-2 w-full">
          <label htmlFor="Message" className="text-[#475467] font-medium text-sm">
            Message
          </label>
          <Textarea
            className="global-input focus:bg-none"
            placeholder="Enter Your Message"
            {...register("Message", {
              required: "Message is required",
              minLength: {
                value: 30, 
                message: "Min is 30",
              },
              maxLength: {
                value: 500,
                message: "Message must be less than 500 characters",
              },
            })}
          />
          {errors.Message && <span className="text-red-500 text-xs">{errors.Message.message}</span>}
        </div>

        {/* Submit Button */}
        <div>
          <CustomButton text="Contact Us" size="lg" variant="Blue" className="mt-6"  type="submit" />
          <div >
            <ToastContainer className="p-10 max-w-md" />
          </div>
        </div>
      </form>
    </>
  );
}
