export const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const rand = () => Math.round(Math.random() * 20 - 10);

export const genData = () => ({
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: 'Scale',
      data: [rand(), rand(), rand(), rand(), rand(), rand()],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
});

export const DATA_FAKE = [
  {
    id: 1,
    name: 'le quang son',
    content: 'Sản phẩm đẹp quá',
    product: 'Website bán hàng',
    time: '10/02/2021',
  },
  {
    id: 2,
    name: 'le quang son',
    content: 'Sao link tải tài liệu không dược vậy',
    product: 'Website bán hàng',
    time: '10/02/2021',
  },
  {
    id: 3,
    name: 'le quang son',
    content: 'Dùng những công nghệ gì vậy',
    product: 'Website bán hàng',
    time: '10/02/2021',
  },
  {
    id: 4,
    name: 'le quang son',
    content: 'Thiết kế đẹp quá',
    product: 'Website bán hàng',
    time: '10/02/2021',
  },
];
