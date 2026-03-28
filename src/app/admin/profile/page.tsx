"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfileSchema, UpdateProfileSchemaType } from "@/schema/profile";
import { useEffect } from "react";

export default function Profile() {
  const queryClient = useQueryClient();
  const { data: profile } = useProfiles();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateProfileSchemaType>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: "",
      title: "",
      bio: "",
    },
  });

  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profiles"],
      });

      // Test
      alert("Success");
    },
  });

  const onSubmit = (data: UpdateProfileSchemaType) => {
    if (profile?.id) {
      mutation.mutate({
        id: profile.id,
        name: data.name || "",
        title: data.title || "",
        bio: data.bio || "",
      });
    }
  };

  useEffect(() => {
    if (profile) {
      reset({
        name: profile.name || "",
        title: profile.title || "",
        bio: profile.bio || "",
      });
    }
  }, [profile, reset]);

  return (
    <>
      <div className="p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white">Profile Settings</h1>
          <p className="text-gray-400">Customize your portfolio presence</p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Name</label>
            <input
              {...register("name")}
              className={`bg-[#1e1e1e] border ${errors.name ? "border-red-500" : "border-gray-700"} rounded-lg p-3 text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
            />
            {errors.name && (
              <span className="text-red-500 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Job Title */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">
              Job Title
            </label>
            <input
              {...register("title")}
              placeholder="เช่น Robotics Developer หรือ Web Developer"
              className="bg-[#1e1e1e] border border-gray-700 rounded-lg p-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && (
              <span className="text-red-500 text-xs">
                {errors.title.message}
              </span>
            )}
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Bio</label>
            <div
              dangerouslySetInnerHTML={{
                __html: profile?.bio || "No bio available.",
              }}
            ></div>
            <textarea
              {...register("bio")}
              rows={6}
              className="bg-[#1e1e1e] border border-gray-700 rounded-lg p-3 text-white outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="เขียนอธิบายเกี่ยวกับตัวคุณ โปรเจกต์ที่ถนัด หรือเป้าหมายการทำงาน..."
            />
          </div>

          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-lg shadow-lg shadow-blue-900/20 transition-all disabled:opacity-50"
          >
            {mutation.isPending ? "กำลังบันทึก..." : "Update Profile"}
          </button>
        </form>
      </div>
    </>
  );
}
