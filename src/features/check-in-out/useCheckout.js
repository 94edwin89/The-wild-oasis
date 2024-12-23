import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";


export function useCheckout() {
  const queryClient = useQueryClient();
  

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId ) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking#${data.id} sucessfully checked out`);
      queryClient.invalidateQueries({ active: true });
      
    },
    onError: () => toast.error("There was error while checked out"),
  });
  return { checkout, isCheckingOut };
}
