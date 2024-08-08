// Your tests here
import {pointsForWord} from "../utils"

describe("pointsForWord", ()=>{
 it("handles uppercase and lowercase input", () => {
    //arrange
    const word = "tEsT";
    //act
    const points = pointsForWord(word);
    //assert
    expect(points).toBe(7);
  })
   
  it("calculates total points for a word(1 point per vowels, per consonant)", ()=>{
    //arrange
    const word = "test"
    //act
    const points = pointsForWord(word)
    //assert
    expect(points).toBe(7)
  })
})