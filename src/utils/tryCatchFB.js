import { authErrors } from "../utils/authErrors";

export const tryCatchFB = async (cb) => {

  const res = {
    result: null,
    error: null,
  }

  /*try {
    res.user = await cb();
  } catch (error) {
    //const errorArr = authErrors(error.code);
    res.error = error.code.slice(5).split("-").join(" ");
  }
  return [res.result, res.error];*/

  const auth = async () => {
    try {
      await cb();
    } catch (error) {
      res.error = error.code.slice(5).split("-").join(" ");
    }
  }

  res.result = auth()

  return [res.result, res.error];
}