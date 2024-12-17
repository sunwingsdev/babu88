import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Modal = ({ isOpen, onOpenChange, title, children }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="md:p-4">
        <DialogHeader className={"bg-white text-black rounded-t-lg"}>
          <DialogTitle className="text-left text-xl px-6 pt-4 pb-2">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="border-t-2 p-7">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
