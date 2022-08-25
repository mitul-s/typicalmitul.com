import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "phosphor-react";

const SheetContext = React.createContext();
const SheetProvider = (props) => {
  const [open, setOpen] = React.useState(false);
  return <SheetContext.Provider value={{ open, setOpen }} {...props} />;
};

const SheetContent = ({ open, children }) => {
  return (
    <AnimatePresence>
      {open && (
        <Dialog.Portal forceMount>
          <Dialog.Overlay forceMount asChild>
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Dialog.Overlay>
          <Dialog.Content forceMount>
            <div className="fixed top-0 right-0 w-full h-full p-yeat sm:w-auto">
              <motion.div
                className="w-full h-full p-4 bg-white border rounded-lg shadow sm:w-96 border-dark"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              >
                <Dialog.Close asChild>
                  <motion.button
                    className="absolute p-1 transition-colors rounded text-stone betterhover:hover:text-dark top-4 right-4"
                    whileTap={{
                      scale: 0.85,
                      transition: {
                        type: "spring",
                        duration: 0.15,
                      },
                    }}
                  >
                    <X size={24} weight="bold" />
                  </motion.button>
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
  return <Dialog.Trigger asChild>{children}</Dialog.Trigger>;
};

const Sheet = ({ open, onOpenChange, children, ...props }) => {
  return (<Dialog.Root open={open} onOpenChange={onOpenChange} {...props}>{children}</Dialog.Root>);
};

export { Sheet, SheetTrigger, SheetContent, SheetContext, SheetProvider };
