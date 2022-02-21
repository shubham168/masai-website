import React from "react";

export const InfoPage = () => {
  return (
    <div>
      <form >
        <label htmlFor="qualification">Highest Qualification</label>
        <input type="text" name="qualification" placeholder="Qualification" />
        <label htmlFor="year">Year of Passing</label>
        <input type="text" name="year" placeholder="Year" />
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input type="date" name="dateOfBirth" />
        <label htmlFor="gender">Date of Birth</label>
        <select name="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select name="state">
          <option value="Maharashtra">Maharashtra</option>
          <option value="Goa">Goa</option>
        </select>
        <input type="submit" name="submit" value="submit" />
      </form>
    </div>
  );
};
