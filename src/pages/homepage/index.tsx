// React
import React, { useState } from "react";

//Images
import BackgroundImage from "../../assets/living_room.png";
import Logo from "../../assets/logo.png";

//SVGS
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

//Date Picker
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./custom_date_picker_style.css"; // theme css file

//Packages
import moment from "moment";

function HomePage() {
  //States
  const [counter, setCounter] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [selectedRange, setSelectedRange] = useState<any>({});

  //Functions
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const handleSelect = (ranges: any) => {
    setSelectionRange(ranges.selection);
  };
  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };
  const closeDatePicker = () => {
    setShowDatePicker(false);
  };

  const clearSelectedDate = () => {
    setSelectionRange({
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    });
  };
  const applyCheckInDate = () => {
    if (
      selectionRange.endDate.getTime() == selectionRange.startDate.getTime()
    ) {
      setSelectedRange({});
    } else {
      setSelectedRange(selectionRange);
    }
    closeDatePicker();
  };
  return (
    <>
      <section className="h-screen">
        <div id="hero" className="bg-custom-bg h-3/5 md:h-5/6 bg-no-repeat">
          <div
            id="nav-bar"
            className="h-12 flex justify-between pt-3 mx-auto my-0 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl"
          >
            <img src={Logo} className="h-full" />
            <div id="nav-btns" className="flex flex-row gap-x-5 items-center">
              <a
                href="https://google.com"
                target="_blank"
                className="help-btn cursor-pointer transition-all text-white border-solid border border-netural-800 px-4 py-1 rounded-full hover:border-white hover:bg-white hover:text-black"
              >
                Help
              </a>
              <div className="contact-btn text-white border-r leading-5 pr-4 transition-all hover:text-black cursor-pointer">
                Contact
              </div>
              <div className="rounded-full bg-white h-10 w-10 flex items-center justify-center">
                MM
              </div>
            </div>
          </div>
          <div
            id="main-text"
            className="text-white text-7xl text-center font-bold md:text-9xl pt-20"
          >
            Escape
            <br />
            the ordinary
          </div>
          <div id="sub-text" className="text-white text-center">
            A new way to stay in your favorite neighbourhoods
            <br /> around the world.
          </div>
        </div>
        <div
          id="search-bar"
          className="flex flex-col gap-y-6 gap-x-4 text-xs w-11/12 backdrop-blur-xl bg-[rgba(255, 255, 255, 0.9)] mx-auto my-0 h-24 relative bottom-40 md:bottom-10 bg-frosted rounded-2xl flex px-4 py-6 h-auto drop-shadow-2xl md:flex-row md:justify-around"
        >
          {showDatePicker && (
            <div
              id="date-picker-modal"
              className="bg-[white] w-fit rounded-2xl drop-shadow-2xl absolute"
            >
              <div
                id="date-picker-modal-header"
                className="flex justify-between px-8 mt-2 h-8 items-center"
              >
                <div></div>
                <div className="font-bold text-base">Calendar</div>
                <div onClick={closeDatePicker} className="cursor-pointer">
                  X
                </div>
              </div>
              <DateRangePicker
                ranges={[selectionRange]}
                rangeColors={["#72A2AF"]}
                staticRanges={[]}
                months={2}
                direction="horizontal"
                showMonthAndYearPickers={false}
                showDateDisplay={false}
                onChange={handleSelect}
                inputRanges={[]}
              />
              <div
                id="date-picker-modal-actions"
                className="flex justify-between h-10 mb-2 mx-2"
              >
                <div
                  id="clear-btn"
                  className="flex items-center justify-center w-16 cursor-pointer"
                  onClick={clearSelectedDate}
                >
                  Clear
                </div>
                <div
                  id="apply-btn"
                  className="flex items-center justify-center w-24 cursor-pointer bg-searchBtn rounded-lg flex h-12 items-center justify-center gap-x-4 text-white text-sm h-auto"
                  onClick={applyCheckInDate}
                >
                  Apply Dates
                </div>
              </div>
            </div>
          )}
          <div
            id="search-city"
            className="flex flex-col border-b md:border-0 border-solid border-neutral-400"
          >
            <div className="uppercase text-[10px]">City</div>
            <div className="text-sm pb-2">Dubai</div>
          </div>
          <div
            id="search-check-in"
            className="flex flex-col border-b md:border-0 border-solid border-neutral-300"
          >
            <div className="uppercase text-[10px]">Check in</div>
            <div
              className="text-sm pb-2 cursor-pointer text-[#858585]"
              onClick={toggleDatePicker}
            >
              {Object.keys(selectedRange).length == 0
                ? "Add dates"
                : moment(selectedRange.startDate).format("dddd, MMMM Do YYYY")}
            </div>
          </div>
          <div
            id="search-check-out"
            className="flex flex-col border-b md:border-0 border-solid border-neutral-300"
          >
            <div className="uppercase text-[10px]">Check out</div>
            <div
              className="text-sm pb-2 cursor-pointer text-[#858585]"
              onClick={toggleDatePicker}
            >
              {Object.keys(selectedRange).length == 0
                ? "Add dates"
                : moment(selectedRange.endDate).format("dddd, MMMM Do YYYY")}
            </div>
          </div>
          <div
            id="search-guests"
            className="flex justify-between items-center border-b md:border-0 border-solid border-neutral-300 pb-2 md:gap-x-10"
          >
            <div className="flex flex-col">
              <div className="uppercase text-[10px]">Guests</div>
              <div className="text-sm text-[#858585]">
                {counter == 0 ? "Add guests" : counter}
              </div>
            </div>
            <div
              id="search-counter"
              className="flex flex-row items-center gap-x-4 border w-fit py-1 px-6 rounded-full"
            >
              <div
                className="text-lg cursor-pointer"
                onClick={decrementCounter}
              >
                -
              </div>
              <div
                className="text-lg cursor-pointer"
                onClick={incrementCounter}
              >
                +
              </div>
            </div>
          </div>
          <div
            id="search-btn"
            className="cursor-pointer w-100 bg-searchBtn rounded-lg flex h-12 items-center justify-center gap-x-4 text-white text-sm font-bold md:w-40"
          >
            <SearchIcon />
            <div>Search</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
