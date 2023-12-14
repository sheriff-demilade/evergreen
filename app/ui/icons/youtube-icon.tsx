const YoutubeIcon = () => {
  return (
    <div className="group inline-block p-[6px] rounded-lg border border-white hover:bg-white duration-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className=" group-hover:stroke-accent-1 duration-300"
      >
        <path
          d="M14 12L10.5 14V10L14 12Z"
          fill="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2 12.7069V11.2919C2 8.3969 2 6.9489 2.905 6.0179C3.811 5.0859 5.237 5.0459 8.088 4.9649C9.438 4.9269 10.818 4.8999 12 4.8999C13.181 4.8999 14.561 4.9269 15.912 4.9649C18.763 5.0459 20.189 5.0859 21.094 6.0179C22 6.9489 22 8.3979 22 11.2919V12.7069C22 15.6029 22 17.0499 21.095 17.9819C20.189 18.9129 18.764 18.9539 15.912 19.0339C14.562 19.0729 13.182 19.0999 12 19.0999C10.6958 19.096 9.39163 19.074 8.088 19.0339C5.237 18.9539 3.811 18.9139 2.905 17.9819C2 17.0499 2 15.6019 2 12.7079V12.7069Z"
          stroke-width="1.5"
        />
      </svg>
    </div>
  );
};

export default YoutubeIcon;
