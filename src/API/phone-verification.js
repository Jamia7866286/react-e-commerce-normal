import axios from "axios";

// const apiKey = "f6d3effe5c654a43a1273a4bee15dabb";

export const validatePhoneNumberViaAPI = async (phoneNumber) => {
  try {
    const response = await axios.get(
      `https://phonevalidation.abstractapi.com/v1/?api_key=f6d3effe5c654a43a1273a4bee15dabb&phone=${phoneNumber}`
    );
    return response.data.valid;
  } catch (error) {
    throw new Error("Caught in validatePhoneNumber: ", error);
  }
};
