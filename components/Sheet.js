import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "phosphor-react";

const SheetContent = ({ open, children }) => {
  return (
    <AnimatePresence>
      {open && (
        <Dialog.Portal forceMount>
          <Dialog.Overlay forceMount asChild>
            <motion.div
              className="fixed inset-0 bg-black/25"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Dialog.Overlay>
          <Dialog.Content forceMount>
            <div className="fixed top-0 right-0 h-full p-yeat">
              <motion.div
                className="h-full p-4 bg-white border rounded-lg shadow w-96 border-dark"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              >
                <Dialog.Close className="p-1 transition duration-300 rounded betterhover:hover:bg-yolk">
                  <X size={24} />
                </Dialog.Close>
                {children}
              </motion.div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      )}
    </AnimatePresence>
  );
};

const SheetTrigger = ({ children }) => {
  return <Dialog.Trigger>{children}</Dialog.Trigger>;
};

const Sheet = ({ open, onOpenChange, children, ...props }) => {
  return (<Dialog.Root open={open} onOpenChange={onOpenChange} {...props}>{children}</Dialog.Root>);
};

export { Sheet, SheetTrigger, SheetContent };
