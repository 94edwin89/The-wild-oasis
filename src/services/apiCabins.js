import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }
  return data;
}


export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // Step 1: Create the cabin in the database
  const { data: cabinData, error: cabinError } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (cabinError) {
    console.error(cabinError);
    throw new Error("Cabin could not be created");
  }

  // Step 2: Upload the image to storage
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // Step 3: Rollback cabin creation if image upload fails
  if (storageError) {
    console.error(storageError);

    // Delete the created cabin
    await supabase.from("cabins").delete().eq("id", cabinData[0]?.id);

    throw new Error(
      "Cabin image could not be uploaded, and the cabin creation was rolled back"
    );
  }

  // Return the cabin data if everything succeeds
  return cabinData;
}
// export async function createCabin(newCabin) {
//   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
//     "/",
//     ""
//   );

//   const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
//   // https://cmkondatsegzjeapwsgp.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

//   //  1. create cabin
//   const { data, error } = await supabase
//     .from("cabins")
//     .insert([{ ...newCabin, image: imagePath }])
//     .select();

//   if (error) {
//     console.error(error);
//     throw new Error("cabins could not be Create");

//     // 2. upload image
//     const { error: storageError } = await supabase.storage
//       .from("cabin-images")
//       .upload(imageName, newCabin.image);
//   }

//   // 3. Delete the cabin if there is an Error in uploading
//   if (storageError) {
//     await supabase.from("cabins").delete().eq("id", data.id);
//     console.error(error);
//     throw new Error(
//       "cabin image could not be uploaded and the cabin was not created"
//     );
//   }
//   return data;
// }

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("cabin could not be delete");
  }
  return data;
}
