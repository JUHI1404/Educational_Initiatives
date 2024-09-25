# Educational_initiatives
## Task-1 
 ## Behavioural Design 
 Case:1 Employment Payroll- Strategy Pattern is used to handle different payroll calculations based on employee types (hourly and salaried). The payroll system can switch between different pay calculation strategies without altering the core logic. This allows the program to dynamically apply the appropriate strategy, making it flexible to handle various payroll structures.

 
 Case:2 Faculty Sehedule Management-Observer Pattern is applied in the Faculty Schedule Management system to notify faculty members of schedule updates. Faculty members (observers) are attached to the schedule system (subject) and automatically receive updates whenever the schedule changes. This keeps the system well-organized and ensures that all faculty members stay informed without needing to manually update each one.

 ## Creational Design
 Case:1 Smart Metro-Singleton Pattern ensures that we have just one instance of the metro schedule system running at all times. This way, everyone accessing the metro timings gets the same, up-to-date information, helping us avoid any mix-ups or duplicate schedules. It keeps everything organized and reliable for all users.

 
  Case:2 Smart Parking - Factory Pattern makes creating different types of parking slots a breeze. In this project, we use it to easily generate various parking options, like regular, VIP, or electric vehicle spaces. This approach lets the parking system adapt to various vehicle needs without complicating the underlying code, making it flexible and user-friendly.

 ## Structural Design
Case:1 SMS to Gmail- The Adapter Pattern allows two incompatible systems to work together. In this project, we adapt an existing SMS service to also support an email service without changing the SMS code. The adapter implements the same interface (MessageSender), enabling us to use the email service where the SMS service was originally expected, making both systems work seamlessly together.


 Case:2 Coffee Topings- The Decorator Pattern allows you to dynamically add responsibilities to an object. This project uses the decorator pattern to add toppings like milk and chocolate to a basic coffee. The core object remains unchanged, but additional functionality is "decorated" onto it at runtime.

# Commands to run the code
git clone <repository-url>


cd structural-design-patterns( whichever folder required)


npm install


npx tsc


node dist/index.js



## Task-2
# Smart Office 
This innovative tool is designed to streamline the management of meeting rooms in your workplace, making your office smarter and more efficient. With Smart Office, you can easily book rooms, keep track of who’s in them, and even automate room features like lighting and air conditioning based on occupancy. Imagine a world where you never have to worry about double bookings or whether the room is too hot or cold—the Smart Office makes that a reality.

Key Features
Easy Room Setup: Configure meeting rooms effortlessly, specifying their capacities to fit your needs.
Seamless Booking: Quickly book rooms, check their availability, and cancel bookings whenever necessary.
Real-time Occupancy Tracking: Stay informed about room usage, and automatically adjust utilities based on occupancy.
Instant Notifications: Receive timely updates about your bookings and any changes to room availability.
Design Patterns Used
Observer Pattern: This pattern keeps everyone in the loop by updating room features (like AC and lights) automatically when occupancy changes.
Strategy Pattern: We use different strategies for booking and managing room states, tailoring the experience to user actions.
Singleton Pattern: This ensures that there’s only one instance of the office configuration, keeping everything organized and unified.
The Smart Office application transforms the way you manage meeting spaces in your workplace. It’s not just about booking rooms; it’s about creating a smarter, more efficient work environment. With the integration of advanced design principles and patterns, this project stands out as a scalable and user-friendly solution for modern office management. Join us in making your office smarter today!
# Output 
![WhatsApp Image 2024-09-25 at 22 32 57_6d4e47f3](https://github.com/user-attachments/assets/3e59aa5a-4f1a-4c04-ba37-ec9050fc0fa9)

![WhatsApp Image 2024-09-25 at 22 33 43_2beb2745](https://github.com/user-attachments/assets/ac553d28-db23-4849-9515-723ac0b5abe3)

