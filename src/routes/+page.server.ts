import supabase from "$lib/supabase";

export const load = async () => {
  const { data, error } = await supabase.from("links").select("*");

  return {
    status: 200,
    body: {
      data,
      error,
    },
  };
};
