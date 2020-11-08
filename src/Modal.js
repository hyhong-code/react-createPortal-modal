import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Fragment } from "react";

const Modal = ({ children, open, onClose }) => {
  return createPortal(
    <AnimatePresence>
      {open && (
        <Fragment>
          {/* Back drop overlay */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
              exit: { opacity: 0 },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed z-50 left-0 right-0 top-0 bottom-0 bg-overlay"
          />

          {/* Modal content */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
              exit: { opacity: 0 },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed z-50 left-1/2 top-1/2 w-64 flex flex-col p-4 bg-blue-100 rounded-xl transform -translate-x-1/2 -translate-y-1/2 shadow-xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="self-end px-4 py-2 rounded-full border border-red-300 text-red-300  mb-4"
            >
              &times;
            </button>

            {/* Content */}
            {children}
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>,
    document.querySelector("#portal")
  );
};

export default Modal;
