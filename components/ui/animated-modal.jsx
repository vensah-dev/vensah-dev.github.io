"use client";;
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click";

const ModalContext = createContext(undefined);

export const ModalProvider = ({
  children
}) => {
  const [open, setOpen] = useState(false);

  return (
    (<ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>)
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export function Modal({
  children
}) {
  return <ModalProvider>{children}</ModalProvider>;
}

export const ModalTrigger = ({
  children,
  className
}) => {
  const { setOpen } = useModal();
  return (
    (<button
      className={cn(
        "px-4 py-2 rounded-md text-white75 text-center relative overflow-hidden",
        className
      )}
      onClick={() => setOpen(true)}>
      {children}
    </button>)
  );
};

export const ModalBody = ({
  children,
  className,
  rootRef
}) => {
  const { open } = useModal();

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const modalRef = useRef(null);
  const { setOpen } = useModal();
  useOutsideClick(modalRef, () => setOpen(false));

  return (
    (<AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            backdropFilter: "blur(10px)",
          }}
          exit={{
            opacity: 0,
            backdropFilter: "blur(0px)",
          }}
          className="fixed inset-0 h-full w-full flex items-center justify-center z-50">
          <Overlay />

          <motion.div
            ref={modalRef}
            className={cn(
              "min-h-[50%] max-h-[90%] md:max-w-[40%] bg-primary md:rounded-2xl relative z-50 flex flex-col flex-1 overflow-hidden",
              className
            )}
            initial={{
              opacity: 0,
              scale: 0.5,
              rotateX: 40,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              rotateX: 10,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 15,
            }}>
            <CloseIcon />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>)
  );
};

export const ModalContent = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col flex-1 p-8 md:p-10", className)}>
      {children}
    </div>)
  );
};

export const ModalFooter = ({
  children,
  className
}) => {
  return (
    (<div
      className={cn("flex text-white90 font-normal leading-8 justify-end p-4 md:p-6 bg-tertiary", className)}>
      {children}
    </div>)
  );
};

const Overlay = ({
  className
}) => {
  return (
    (<motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        backdropFilter: "blur(10px)",
      }}
      exit={{
        opacity: 0,
        backdropFilter: "blur(0px)",
      }}
      className={`fixed inset-0 h-full w-full bg-white5 bg-opacity-50 z-50 ${className}`}></motion.div>)
  );
};

const CloseIcon = () => {
  const { setOpen } = useModal();
  return (
    (
    <div className="sticky top-0 p-4 flex justify-end w-ful">
      <button onClick={() => setOpen(false)} >
        <div className="w-10 h-10 lg:w-8 lg:h-8 flex items-center justify-center rounded-full bg-white15 hover:opacity-75 transition duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white h-4 w-4">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </div>
      </button>
    </div>
    )
  );
};
