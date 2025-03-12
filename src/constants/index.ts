import { Clock, Code2, Calendar, Users } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
  { id: "completed", title: "Completed", variant: "secondary" },
  { id: "succeeded", title: "Succeeded", variant: "default" },
  { id: "failed", title: "Failed", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

export const QUICK_ACTIONS = [
  {
    icon: Code2,
    title: "New Call",
    description: "Start an instant call",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Plan upcoming interviews",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recordings",
    description: "Access past interviews",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

export const CODING_QUESTIONS: CodeQuestion[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    description:
      "Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to `target`.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
}`,
      python: `def two_sum(nums, target):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
    }
}`,
      c: `#include <stdio.h>

void twoSum(int nums[], int size, int target) {
    // Write your solution here
}`,
      cpp: `#include <iostream>
using namespace std;

void twoSum(int nums[], int size, int target) {
    // Write your solution here
}`,
    },
    constraints: [
      "2 ≤ nums.length ≤ 104",
      "-109 ≤ nums[i] ≤ 109",
      "-109 ≤ target ≤ 109",
      "Only one valid answer exists.",
    ],
  },
  {
    id: "reverse-string",
    title: "Reverse String",
    description:
      "Write a function that reverses a string. The input string is given as an array of characters `s`.",
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
}`,
      python: `def reverse_string(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public void reverseString(char[] s) {
        // Write your solution here
    }
}`,
      c: `#include <stdio.h>

void reverseString(char s[], int size) {
    // Write your solution here
}`,
      cpp: `#include <iostream>
using namespace std;

void reverseString(char s[], int size) {
    // Write your solution here
}`,
    },
  },
  {
    id: "palindrome-number",
    title: "Palindrome Number",
    description:
      "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.",
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 reads as 121 from left to right and from right to left.",
      },
      {
        input: "x = -121",
        output: "false",
        explanation:
          "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.",
      },
    ],
    starterCode: {
      javascript: `function isPalindrome(x) {
  // Write your solution here
}`,
      python: `def is_palindrome(x):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isPalindrome(int x) {
        // Write your solution here
    }
}`,
      c: `#include <stdio.h>

int isPalindrome(int x) {
    // Write your solution here
}`,
      cpp: `#include <iostream>
using namespace std;

bool isPalindrome(int x) {
    // Write your solution here
}`,
    },
  },

  {
    id: "fibonacci-number",
    title: "Fibonacci Number",
    description:
      "Given an integer `n`, return the `n`th Fibonacci number. The Fibonacci sequence is defined as follows:\n- `F(0) = 0, F(1) = 1`\n- `F(n) = F(n-1) + F(n-2)`, for `n >= 2`.",
    examples: [
      {
        input: "n = 2",
        output: "1",
      },
      {
        input: "n = 5",
        output: "5",
      },
      {
        input: "n = 10",
        output: "55",
      },
    ],
    starterCode: {
      javascript: `function fibonacci(n) {
  // Write your solution here
}`,
      python: `def fibonacci(n):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int fibonacci(int n) {
        // Write your solution here
    }
}`,
      c: `#include <stdio.h>

int fibonacci(int n) {
    // Write your solution here
}`,
      cpp: `#include <iostream>
using namespace std;

int fibonacci(int n) {
    // Write your solution here
}`,
    },
  },

  {
    id: "count-primes",
    title: "Count Primes",
    description:
      "Given an integer `n`, return the number of prime numbers that are strictly less than `n`.",
    examples: [
      {
        input: "n = 10",
        output: "4",
        explanation: "The primes less than 10 are 2, 3, 5, 7.",
      },
      {
        input: "n = 0",
        output: "0",
      },
      {
        input: "n = 1",
        output: "0",
      },
    ],
    starterCode: {
      javascript: `function countPrimes(n) {
  // Write your solution here
}`,
      python: `def count_primes(n):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int countPrimes(int n) {
        // Write your solution here
    }
}`,
      c: `#include <stdio.h>

int countPrimes(int n) {
    // Write your solution here
}`,
      cpp: `#include <iostream>
using namespace std;

int countPrimes(int n) {
    // Write your solution here
}`,
    },
  },

  {
    id: "single-number",
    title: "Single Number",
    description:
      "Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one. You must implement a solution with linear runtime complexity and without using extra memory.",
    examples: [
      {
        input: "nums = [2,2,1]",
        output: "1",
      },
      {
        input: "nums = [4,1,2,1,2]",
        output: "4",
      },
    ],
    starterCode: {
      javascript: `function singleNumber(nums) {
  // Write your solution here
}`,
      python: `def single_number(nums):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int singleNumber(int[] nums) {
        // Write your solution here
    }
}`,
      c: `#include <stdio.h>

int singleNumber(int nums[], int size) {
    // Write your solution here
}`,
      cpp: `#include <iostream>
using namespace std;

int singleNumber(int nums[], int size) {
    // Write your solution here
}`,
    },
  },

  {
    id: "power-of-two",
    title: "Power of Two",
    description:
      "Given an integer `n`, return `true` if it is a power of two, otherwise return `false`. An integer `n` is a power of two if there exists an integer `x` such that `n == 2^x`.",
    examples: [
      {
        input: "n = 1",
        output: "true",
        explanation: "2^0 = 1",
      },
      {
        input: "n = 16",
        output: "true",
      },
      {
        input: "n = 3",
        output: "false",
      },
    ],
    starterCode: {
      javascript: `function isPowerOfTwo(n) {
  // Write your solution here
}`,
      python: `def is_power_of_two(n):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isPowerOfTwo(int n) {
        // Write your solution here
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>

bool isPowerOfTwo(int n) {
    // Write your solution here
}`,
      cpp: `#include <iostream>
using namespace std;

bool isPowerOfTwo(int n) {
    // Write your solution here
}`,
    },
  },



];

export const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
  { id: "c", name: "C", icon: "/c.png" },
  { id: "cpp", name: "C++", icon: "/cpp.png" },
] as const;

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    javascript: string;
    python: string;
    java: string;
    c: string;
    cpp: string;
  };
  constraints?: string[];
}
export type QuickActionType = (typeof QUICK_ACTIONS)[number];