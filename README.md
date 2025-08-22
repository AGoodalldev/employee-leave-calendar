# employee-leave-calendar
Modern employee leave management calendar
# Employee Leave Calendar

A modern, responsive employee leave management calendar built with React and Tailwind CSS.

## Features

- 📊 **Employee Overview**: Individual leave tracking with progress bars
- 📅 **Calendar Views**: Month, week, and year views
- 🔍 **Search & Filter**: Find employees and filter leave requests
- 📈 **Analytics**: Team utilization and leave statistics
- 🎨 **Customizable Branding**: Company colors and branding options
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile

## Demo

Visit the live demo: [https://yourusername.github.io/employee-leave-calendar](https://yourusername.github.io/employee-leave-calendar)

## Getting Started

### GitHub Pages Deployment

1. Fork or clone this repository
2. Go to your repository settings
3. Navigate to "Pages" section
4. Set source to "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

Your calendar will be available at: `https://yourusername.github.io/employee-leave-calendar`

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/employee-leave-calendar.git
cd employee-leave-calendar
```

2. Open `index.html` in your web browser or serve it with a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

## Customization

### Adding Employees

Edit the `employees` array in the JavaScript section:

```javascript
const [employees] = useState([
  {
    id: 1,
    name: 'Your Employee Name',
    department: 'Department',
    totalLeave: 200, // hours
    usedLeave: 64,
    avatar: 'YE', // initials
    color: '#3B82F6' // hex color
  }
  // Add more employees...
]);
```

### Adding Leave Requests

Edit the `leaveRequests` array:

```javascript
const [leaveRequests] = useState([
  {
    id: 1,
    employeeId: 1, // matches employee id
    startDate: new Date(2025, 7, 25),
    endDate: new Date(2025, 7, 29),
    type: 'Annual Leave',
    status: 'approved', // approved, pending, rejected
    hours: 40
  }
  // Add more leave requests...
]);
```

### Company Branding

Update the `companyBranding` object:

```javascript
const [companyBranding] = useState({
  companyName: 'Your Company Name',
  primaryColor: '#3B82F6', // your brand color
  logo: null // can be extended to include logo
});
```

## Technologies Used

- **React 18**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Babel Standalone**: For JSX transformation in browser

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin new-feature`
5. Submit a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you have questions or need help, please open an issue on GitHub.

---

**Note**: This is a frontend-only demo with sample data. For production use, you'll need to integrate with a backend API for data persistence and user authentication.
