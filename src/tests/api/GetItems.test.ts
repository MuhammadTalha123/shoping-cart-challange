import { ItemProps } from "./../../interfaces/index";
import { getItems } from "../../api/GetItem";

test("Testing get items endpoint", (done) => {
  function callback(data: ItemProps[]) {
    try {
      expect(data?.length).toBeGreaterThanOrEqual(0);
      done();
    } catch (error) {
      done(error);
    }
  }

  getItems().then(callback);
});
