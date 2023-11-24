"use client";
// import * as React from 'react';
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import { Button, DialogContent } from "@mui/material";
import { Close } from "@mui/icons-material";
import { motion } from "framer-motion";
import Image from "next/image";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      className="[&>div>div]:bg-transparent [&>div>div]:h-full [&>div>div]:w-full [&>div>div]:md:w-auto [&>div>div]:md:h-auto"
      onClose={handleClose}
      open={open}
    >
      <DialogContent
        className="bg-neutral-800 w-auto md:w-[500px] drop-shadow-md rounded-md text-white p-5"
        sx={{ pt: 0 }}
      >
        <DialogTitle className="text-center text-[30px] font-bold bg-neutral-800 text-white capitalize">
          welcome back
        </DialogTitle>
        <div className="w-full">
          <div className="text-center">Login to your account</div>

          <div className="w-full [&>div]:rounded-md mt-3 [&>div]:text-center flex flex-col gap-1">
            <div className="bg-white p-3 flex justify-center items-center gap-2">
              <Image
                alt="github image"
                src="/images/githubModel.png"
                width={20}
                height={20}
                className="object-cover w-5 h-5"
              />
              <p className="capitalize text-[#353535] text-xs">
                sign in with github
              </p>
            </div>
            <div className="bg-white p-3 flex justify-center items-center gap-2">
              <Image
                alt="google image"
                src="/images/googleModel.png"
                width={20}
                height={20}
                className="object-cover w-5 h-5"
              />
              <p className="capitalize text-[#353535] text-xs">
                sign in with google
              </p>
            </div>
          </div>

          <hr className="my-5 border-neutral-500 rounded-full" />

          <form action="#" className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="capitalize text-neutral-500 text-sm"
              >
                email address
              </label>
              <input
                type="text"
                className="border transition rounded-md p-2 border-neutral-600 focus:border-neutral-400 outline-none bg-transparent"
                placeholder="Your email address"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="capitalize text-neutral-500 text-sm"
              >
                your password
              </label>
              <input
                type="password"
                className="border transition border-neutral-600 p-2 focus:border-neutral-400 rounded-md outline-none bg-transparent"
                placeholder="your password"
              />
            </div>
          </form>

          <Button className="capitalize text-white bg-green-500 w-full mt-5 font-bold">
            sign in
          </Button>

          <div className="flex flex-col gap-1 mb-3 text-center mt-5 text-sm text-neutral-500">
            <a href="#" className="underline">
              forgot your password
            </a>
            <a href="#" className="underline">
              Don`t have an account? Sign up
            </a>
          </div>
        </div>
        <Close
          onClick={handleClose}
          className="text-neutral-400 hover:text-white absolute top-[10px] right-[10px] h-[20px] w-[20px] rounded-full justify-center items-center"
        />
      </DialogContent>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo({ children }) {
  const [open, setOpen] = useState(true);

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div className="absolute">
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
