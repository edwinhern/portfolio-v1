import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface DialogWrapperProps extends ChildProps {
  dialogDescription: string;
  dialogTitle: string;
}

const DialogWrapper: React.FC<DialogWrapperProps> = ({ children, dialogDescription, dialogTitle }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <Card>
            <CardHeader className="px-4">
              <CardTitle className="text-sm font-medium">{dialogTitle}</CardTitle>
            </CardHeader>
            <CardContent className="px-4">
              <div className="text-sm text-muted-foreground">{dialogDescription}</div>
            </CardContent>
          </Card>
          <DialogHeader>
            <DialogTitle>{dialogTitle}</DialogTitle>
            <DialogDescription>{dialogDescription}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogWrapper;
