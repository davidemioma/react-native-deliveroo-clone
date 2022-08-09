export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short Description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "lat",
      title: "Latitude",
      type: "number",
    },
    {
      name: "lng",
      title: "Longitude",
      type: "number",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required().max(30),
    },
    {
      name: "rating",
      title: "rating from 1-5",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("enter a number from 1 to 5"),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      title: "Dishes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
