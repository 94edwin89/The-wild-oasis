import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  // deleting the cabin row and re fetching the data and showing the alert message

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({

    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking Succesfully Deleted");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  }); 

  return { isDeleting, deleteBooking };
}
