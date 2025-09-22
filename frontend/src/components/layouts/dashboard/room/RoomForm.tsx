"use client";

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EditRoomType } from "@/types/room/room";
import { toast } from "sonner";

type RoomFormProps = {
  defaultValues: EditRoomType;
  onSubmit: (data: EditRoomType) => void;
  isPending?: boolean;
  cancelHandler?: () => void;
};

const RoomForm: React.FC<RoomFormProps> = ({
  defaultValues,
  onSubmit,
  isPending,
  cancelHandler,
}) => {
  const [previews, setPreviews] = useState<string[]>([]);
  const [existingImages, setExistingImages] = useState<string[]>([]);

  const { register, handleSubmit, setValue, watch, reset, control } =
    useForm<EditRoomType>({
      defaultValues,
    });

  const images = watch("image");
  const oldImages = watch("oldImages");

  useEffect(() => {
    reset(defaultValues);
    setExistingImages(defaultValues.oldImages || []);
  }, [defaultValues, reset]);

  useEffect(() => {
    const urls = images?.map((file) => URL.createObjectURL(file)) || [];
    setPreviews(urls);
    return () => urls.forEach(URL.revokeObjectURL);
  }, [images]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length + existingImages.length > 3) {
      toast.error("Maksimal hanya 3 gambar (lama + baru)");
      return;
    }
    setValue("image", files);
  };

  const handleDeleteOldImage = (url: string) => {
    setExistingImages((prev) => prev.filter((img) => img !== url));
    setValue("oldImages", oldImages?.filter((img) => img !== url) || []);
  };

  return (
    <div className="flex-1 p-4 lg:p-8">
      <Card className="w-full max-w-4xl mx-auto p-8">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold">Room Form</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Room Name */}
            <div>
              <Label htmlFor="name">Room Name</Label>
              <Input id="name" {...register("name")} required />
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description">Description</Label>
              <Input id="description" {...register("description")} />
            </div>

            {/* Base Price */}
            <div>
              <Label htmlFor="base_price">Base Price</Label>
              <Input
                id="base_price"
                type="number"
                min={0}
                {...register("base_price", { valueAsNumber: true })}
                required
              />
            </div>

            {/* Capacity & Total Rooms */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="capacity">Capacity</Label>
                <Input
                  id="capacity"
                  type="number"
                  min={0}
                  {...register("capacity", { valueAsNumber: true })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="total_rooms">Total Rooms</Label>
                <Input
                  id="total_rooms"
                  type="number"
                  min={0}
                  {...register("total_rooms", { valueAsNumber: true })}
                  required
                />
              </div>
            </div>

            {/* Existing images */}
            {existingImages.length > 0 && (
              <div>
                <Label>Existing Images</Label>
                <div className="mt-2 flex gap-4 flex-wrap">
                  {existingImages.map((src, idx) => (
                    <div key={idx} className="relative">
                      <Image
                        src={src}
                        alt={`Room Image ${idx + 1}`}
                        width={120}
                        height={120}
                        className="rounded-lg border shadow-sm object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteOldImage(src)}
                        className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        X
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* New upload */}
            <div>
              <Label htmlFor="images">Add New Images (max 3)</Label>
              <input
                id="images"
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
              />
              {previews.length > 0 && (
                <div className="mt-4 flex gap-4 flex-wrap">
                  {previews.map((src, idx) => (
                    <Image
                      key={idx}
                      src={src}
                      alt={`New Room Image ${idx + 1}`}
                      width={120}
                      height={120}
                      className="rounded-lg border shadow-sm object-cover"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Weekend Peak */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="weekend_peak_type">Weekend Peak Type</Label>
                <Controller
                  control={control}
                  name="weekend_peak.type"
                  render={({ field }) => (
                    <select {...field}>
                      <option value="nominal">Nominal</option>
                      <option value="percentage">Percentage</option>
                    </select>
                  )}
                />
              </div>
              <div>
                <Label htmlFor="weekend_peak_value">Value</Label>
                <Input
                  type="number"
                  {...register("weekend_peak.value", { valueAsNumber: true })}
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {cancelHandler && (
                <Button type="button" variant="outline" onClick={cancelHandler}>
                  Cancel
                </Button>
              )}
              <Button
                type="submit"
                disabled={isPending}
                className="flex-1 bg-orange-500 hover:bg-orange-600">
                {isPending ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoomForm;
