import supabase from "$lib/supabase";

export const load = async () => {
  const { data, error } = await supabase.from("links").select("*");

  return {
    body: {
      data,
      error,
    },
  };
};
