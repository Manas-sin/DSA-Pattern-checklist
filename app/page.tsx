"use client";

import React, { useEffect, useState } from "react";

interface Item {
  text: string;
  done: boolean;
}

interface Category {
  id: string;
  title: string;
  items: Item[];
  collapsed?: boolean;
}

const INITIAL_DATA: Category[] = [
  // --- CORE DATA STRUCTURES ---

  {
    id: "arrays",
    title: "Arrays",
    items: [
      "Insert / Delete / Update",
      "Find Min/Max",
      "Prefix Sum",
      "Difference Array",
      "Reverse Array",
      "Rotate Array",
      "Maximum Product Subarray", // Added
      "Maximum Sum Circular Subarray", // Added
      "Trapping Rainwater", // Moved to Array/Two Pointers
      "Merge Intervals",
      "Kadane’s Algorithm",
      "Maximum Subarray Sum",
      "Subarray Sum Equals K",
      "Subarray With Given XOR",
      "Dutch National Flag (0, 1, 2 sort)",
      "Stock Buy Sell Problems",
      "Matrix Spiral Order",
      "Rotate Matrix (90 degrees)",
      "Search Sorted 2D Matrix",
      "2D Prefix Sum Matrix",
      "Range Minimum/Maximum Query (Basic)", // Added
      "Missing/Duplicate Number (Cyclic Sort)", // Added
    ].map((t) => ({ text: t, done: false })),
  },

  {
    id: "strings",
    title: "Strings",
    items: [
      "Palindrome / Valid Palindrome",
      "Anagram / Group Anagrams",
      "Character Frequency",
      "Reverse String / Words in String",
      "String to Integer (atoi)",
      "KMP Algorithm",
      "Z Algorithm",
      "Rabin Karp (Rolling Hash)", // Renamed for clarity
      "Manacher’s Algorithm",
      "Longest Common Prefix",
      "Sliding Window String Problems",
      "Minimum Window Substring",
      "Word Break",
      "Longest Palindromic Substring",
      "String Matching",
      "Remove Adjacent Duplicates",
      "Generate all Subsequences", // Added
    ].map((t) => ({ text: t, done: false })),
  },

  {
    id: "linkedlist",
    title: "Linked List",
    items: [
      "Insert/Delete/Traverse",
      "Reverse Linked List",
      "Middle of List",
      "Detect Cycle (Floyd's Tortoise and Hare)",
      "Find Cycle Start",
      "Cycle Length",
      "Reverse in Groups of K",
      "Merge Two Sorted Lists",
      "Merge K Sorted Lists",
      "Remove N-th Node From End",
      "Add Two Numbers",
      "Flatten Linked List (Multi-level/Sorted)",
      "Deep Copy List with Random Pointer", // Added
      "Rotate List", // Added
      "Reorder List", // Added
    ].map((t) => ({ text: t, done: false })),
  },

  {
    id: "stack",
    title: "Stack",
    items: [
      "Valid Parentheses / Balanced Parentheses",
      "Min Stack / Max Stack",
      "Next Greater Element (I & II)",
      "Next Smaller Element",
      "Monotonic Stack (Pattern)",
      "Largest Rectangle in Histogram",
      "Maximal Rectangle", // Added
      "Daily Temperatures",
      "Evaluate Postfix/Prefix",
      "Infix to Postfix",
      "Stack using Queues",
    ].map((t) => ({ text: t, done: false })),
  },

  {
    id: "queue",
    title: "Queue / Deque",
    items: [
      "Circular Queue",
      "Sliding Window Maximum (using Deque)",
      "Monotonic Queue (Pattern)",
      "Rotting Oranges (BFS on Grid)",
      "Implement Queue using Stacks",
      "Implement Deque", // Added
    ].map((t) => ({ text: t, done: false })),
  },

  {
    id: "hashing",
    title: "Hashing & Hash Tables",
    items: [
      "HashMap / HashSet Operations",
      "Frequency Map / Counting",
      "Group Anagrams",
      "Longest Consecutive Sequence",
      "Subarray Sum Equals K",
      "Count Equal Subarray Sums",
      "Check Duplicates (I, II, III)",
      "Two Sum / Three Sum / Four Sum",
      "Isomorphic Strings",
      "Design LRU Cache",
      "Design LFU Cache", // Added
    ].map((t) => ({ text: t, done: false })),
  },

  {
    id: "trie",
    title: "Trie / Prefix Tree",
    items: [
      "Insert / Search / Delete",
      "Prefix Search",
      "Autocomplete System",
      "Word Break Using Trie",
      "Longest Common Prefix",
      "Count Distinct Substrings",
      "Max XOR Pair (Trie with Bits)", // Added
      "Trie + DP Patterns",
    ].map((t) => ({ text: t, done: false })),
  },

  // --- ALGORITHMS & PATTERNS ---

  {
    id: "sorting_searching",
    title: "Sorting & Advanced Searching", // New Category
    items: [
      "Merge Sort (In-place & Standard)",
      "Quick Sort (Partitioning Schemes)",
      "Heap Sort",
      "Non-Comparison Sorts (Counting/Radix)",
      "Binary Search (Standard)",
      "Binary Search on Answer / Result (Pattern)", // Added
      "Search in Rotated Sorted Array",
      "Upper Bound / Lower Bound (Ceil/Floor Index)", // Added
      "Kth Largest Element (QuickSelect/Heap)",
      "Two Pointers Partitioning (e.g., in QuickSort)", // Added
    ].map((t) => ({ text: t, done: false })),
  },

  {
    id: "twoPointers",
    title: "Two Pointers",
    items: [
      "Pair Sum / 2-Sum",
      "3-Sum / 4-Sum",
      "Container With Most Water",
      "Fast & Slow Pointer (Cycle Detection)",
      "Remove Duplicates (In-place)",
      "Partition Labels",
      "Two Sum II (Sorted Array)",
      "Minimum Difference Pair",
    ].map((t) => ({ text: t, done: false })),
  },

  {
    id: "slidingWindow",
    title: "Sliding Window",
    items: [
      "Fixed Window (e.g., Averages)",
      "Variable Window (Shrinking/Expanding)",
      "Longest Substring Without Repeat",
      "Longest Substring With K Distinct",
      "Minimum Window Substring",
      "Longest Repeating Character Replacement",
      "Subarrays Less Than K",
      "First Negative Number in Window",
      "Permutation in String", // Added
    ].map((t) => ({ text: t, done: false })),
  },

  {
    id: "heaps",
    title: "Heap / Priority Queue",
    items: [
      "Min Heap / Max Heap Implementation",
      "Heapify Algorithm", // Added
      "Kth Largest / Smallest Element",
      "Top K Frequent Elements",
      "Merge K Sorted Lists/Arrays",
      "Median of Stream (Two Heaps Pattern)", // Added
      "Running Median",
      "Reorganize String",
      "Connect Ropes/Sticks (Min Cost)", // Added
      "Dijkstra (Heap-based)",
    ].map((t) => ({ text: t, done: false })),
  },

  {
    id: "greedy",
    title: "Greedy Algorithms",
    items: [
      "Activity Selection",
      "Job Sequencing Problem",
      "Gas Station",
      "Minimum Platforms",
      "Huffman Coding",
      "Greedy Interval Scheduling",
      "Jump Game (Greedy Solution)",
      "Fractional Knapsack", // Added
      "Min Cost to Connect Ropes",
    ].map((t) => ({ text: t, done: false })),
  },

  {
    id: "backtracking",
    title: "Recursion & Backtracking",
    items: [
      "Subsets / Subsets II (with duplicates)", // Added II
      "Permutations / Permutations II", // Added II
      "Combinations / Combination Sum (I, II, III)", // Expanded
      "N Queens",
      "Sudoku Solver",
      "Word Search (on a Grid)",
      "Rat in a Maze / Path Finding",
      "Palindrome Partitioning",
      "Generate Balanced Parentheses",
      "The Knight's Tour (Concept)", // Added
    ].map((t) => ({ text: t, done: false })),
  },

  // --- TREE & GRAPH ALGORITHMS ---

  {
    id: "trees",
    title: "Binary Trees",
    items: [
      "Preorder / Inorder / Postorder (Recursive)",
      "Preorder / Inorder / Postorder (Iterative)", // Added
      "Level Order Traversal (BFS)",
      "Zig-zag Traversal",
      "Height / Depth Calculation",
      "Balanced Tree Check",
      "Diameter of a Tree",
      "Path Sum (I, II, III)",
      "Symmetric Tree / Mirror Tree",
      "Boundary Traversal",
      "Left View / Right View",
      "Top View / Bottom View",
      "Vertical Order Traversal",
      "LCA (Lowest Common Ancestor)", // Added
      "Serialize / Deserialize", // Added
      "Construct Tree from Traversals", // Added
      "Maximum Path Sum (Any-to-Any Node)", // Added
    ].map((t) => ({ text: t, done: false })),
  },

  {
    id: "bst",
    title: "Binary Search Tree",
    items: [
      "Insert/Search/Delete Operations",
      "Validate BST",
      "Kth Largest/Smallest Element",
      "Floor/Ceil in BST",
      "Inorder Successor/Predecessor",
      "Convert Sorted Array to BST",
      "Merge Two BSTs",
      "LCA in BST (Optimized)", // Added
      "Balancing Concepts (AVL/Red-Black)", // Added
    ].map((t) => ({ text: t, done: false })),
  },

  {
    id: "graphBasics",
    title: "Graphs – BFS / DFS / Basics",
    items: [
      "Graph Representation (List/Matrix)",
      "Directed vs Undirected",
      "Weighted vs Unweighted",
      "BFS Traversal",
      "DFS Traversal",
      "Connected Components / Islands (Matrix Traversal)", // Added Islands
      "Cycle Detection (Undirected)",
      "Cycle Detection (Directed)",
      "Topological Sort (DFS)",
      "Topological Sort (Kahn's Algorithm)",
      "Bipartite Graph (BFS/DFS)",
    ].map((t) => ({ text: t, done: false })),
  },

  {
    id: "graphAdvanced",
    title: "Graphs – Advanced",
    items: [
      "Dijkstra Algorithm (Shortest Path)",
      "Bellman Ford (Negative Weights)",
      "Floyd Warshall (All-Pairs Shortest Path)",
      "0-1 BFS",
      "Multi-Source BFS",
      "A\* Search Algorithm", // Added
      "Prim's MST",
      "Kruskal's MST + DSU",
      "Union-Find (Disjoint Set Union)",
      "Bridges (Tarjan's Algorithm)",
      "Articulation Points / Cut Vertices", // Added
      "SCC – Kosaraju's Algorithm",
      "SCC – Tarjan's Algorithm",
      "Eulerian Path/Circuit",
      "Hamiltonian Path/Cycle (Basics)",
      "Shortest Path in Grid/Maze",
      "Flood Fill",
    ].map((t) => ({ text: t, done: false })),
  },

  // --- ADVANCED ALGORITHMS ---

  {
    id: "dp",
    title: "Dynamic Programming",
    items: [
      "Fibonacci DP",
      "Climbing Stairs / House Robber",
      "Jump Game (I & II)",
      "Min Cost Climbing Stairs",
      "Longest Increasing Subsequence",
      "Longest Common Subsequence",
      "Longest Common Substring",
      "Edit Distance",
      "Matrix Chain Multiplication",
      "Longest Palindromic Subsequence",
      "Unique Paths / Min Path Sum (Grid DP)",
      "Cherry Pickup",
      "0/1 Knapsack",
      "Unbounded Knapsack",
      "Subset Sum",
      "Equal Partition",
      "Coin Change (I & II)",
      "Target Sum",
      "Rod Cutting",
      "Decode Ways",
      "DP on Trees (Max Path Sum, etc.)", // Added specific reference
      "Digit DP (Concept)", // Added
      "Profile/Bitmask DP (Concept)", // Added
      "State Compression DP", // Added
    ].map((t) => ({ text: t, done: false })),
  },

  {
    id: "advancedTrees",
    title: "Advanced Trees & Structures",
    items: [
      "Segment Tree (Range Queries)",
      "Fenwick Tree (BIT - Point Updates)",
      "Lazy Propagation (in Segment Tree)",
      "Sparse Table (RMQ)",
      "Binary Lifting (LCA/Ancestors)",
      "Heavy-Light Decomposition",
      "Persistent Data Structures (Concept)", // Added
      "Treaps / Splay Trees", // Added
      "AVL Tree / Red-Black Tree (Concepts)",
      "B-Tree / B+ Tree (Concepts)", // Added
    ].map((t) => ({ text: t, done: false })),
  },

  {
    id: "bitManipulation",
    title: "Bit Manipulation",
    items: [
      "XOR Basics / Properties",
      "Single Number Problems (I, II, III)",
      "Count Set Bits (Hamming Weight)",
      "Check Power of Two / Power of Four",
      "Bitmask Subsets Generation",
      "Brian Kernighan’s Algorithm",
      "Set/Clear/Toggle Bit",
      "Flip Bits",
      "Gray Code", // Added
      "AND Product / OR Patterns",
    ].map((t) => ({ text: t, done: false })),
  },

  {
    id: "math",
    title: "Math & Number Theory",
    items: [
      "GCD / LCM (Euclidean Algorithm)", // Added reference
      "Prime Sieve (Eratosthenes)",
      "Prime Factorization",
      "Modular Arithmetic (Addition, Subtraction, Multiplication)",
      "Modular Inverse (Fermat's Little Theorem)", // Added reference
      "Matrix Exponentiation (for large Fibonacci/DP)",
      "Fast Power / Exponentiation by Squaring",
      "Combinatorics C(n,r) (nCr)",
      "Catalan Numbers (Basics)",
      "Probability Basics (Expected Value)",
      "Inclusion-Exclusion Principle", // Added
    ].map((t) => ({ text: t, done: false })),
  },

  {
    id: "advanced",
    title: "Advanced Interview Patterns", // Renamed and focused
    items: [
      "Two Heaps Pattern (Median/Scheduling)", // Added
      "Mo’s Algorithm (Square Root Decomposition)",
      "Sweep Line Algorithm",
      "Meet-in-the-Middle (MITM)",
      "Reservoir Sampling",
      "Suffix Array Basics",
      "Suffix Tree Basics", // Added
      "Bloom Filters (Concept)",
      "Game Theory (Nim/Grundy)", // Added
      "Computational Geometry (Convex Hull Basics)", // Added
    ].map((t) => ({ text: t, done: false })),
  },
];

const Page: React.FC = () => {
  const [data, setData] = useState<Category[]>(INITIAL_DATA);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("dsa_checklist_v1");
      if (saved) setData(JSON.parse(saved));
    } catch {}
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("dsa_checklist_v1", JSON.stringify(data));
    }
  }, [data, loading]);

  if (loading) {
    return (
      <div className="p-10 text-gray-200 text-xl">Loading checklist...</div>
    );
  }

  const totalItems = data.reduce((s, c) => s + c.items.length, 0);
  const doneItems = data.reduce(
    (s, c) => s + c.items.filter((i) => i.done).length,
    0
  );
  const percent = Math.round((doneItems / totalItems) * 100);

  const toggleItem = (catId: string, idx: number) => {
    setData((prev) =>
      prev.map((c) =>
        c.id === catId
          ? {
              ...c,
              items: c.items.map((it, i) => (i === idx ? { ...it, done: !it.done } : it)),
            }
          : c
      )
    );
  };

  const toggleCategory = (catId: string) => {
    setData((prev) => prev.map((c) => (c.id === catId ? { ...c, collapsed: !c.collapsed } : c)));
  };

  const checkAllCategory = (catId: string) => {
    setData((prev) =>
      prev.map((c) => (c.id === catId ? { ...c, items: c.items.map((it) => ({ ...it, done: true })) } : c))
    );
  };

  const uncheckAllCategory = (catId: string) => {
    setData((prev) =>
      prev.map((c) => (c.id === catId ? { ...c, items: c.items.map((it) => ({ ...it, done: false })) } : c))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white font-inter">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-md">📘 DSA Mastery Tracker</h1>
          <p className="text-gray-300 mt-2">Track your DSA progress — expanded master list included.</p>

          <div className="w-full h-4 bg-slate-700 rounded-full mt-6 overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>

          <p className="mt-2 text-gray-300">{doneItems} / {totalItems} completed ({percent}%)</p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((cat) => {
            const catTotal = cat.items.length;
            const catDone = cat.items.filter((i) => i.done).length;
            const catPercent = Math.round((catDone / catTotal) * 100);

            return (
              <div
                key={cat.id}
                className="bg-slate-800/60 backdrop-blur-xl rounded-xl p-5 shadow-lg border border-slate-700 hover:border-indigo-400 transition duration-300"
              >
                <button onClick={() => toggleCategory(cat.id)} className="w-full text-left">
                  <h2 className="text-xl font-semibold flex items-center justify-between">
                    {cat.title}
                    <span className="text-sm text-gray-400">{catPercent}%</span>
                  </h2>
                  <p className="text-sm text-gray-400">{catDone} / {catTotal} done</p>
                </button>

                {!cat.collapsed && (
                  <ul className="mt-4 space-y-3 max-h-64 overflow-auto pr-2">
                    {cat.items.map((it, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 bg-slate-700/40 p-3 rounded-lg hover:bg-slate-700/60 transition"
                      >
                        <input
                          type="checkbox"
                          checked={it.done}
                          onChange={() => toggleItem(cat.id, idx)}
                          className="h-5 w-5 accent-indigo-500 cursor-pointer"
                        />
                        <span className={it.done ? "line-through text-gray-500" : "text-gray-200"}>{it.text}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex gap-3 mt-4">
                  <button onClick={() => checkAllCategory(cat.id)} className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 rounded text-sm">Check All</button>
                  <button onClick={() => uncheckAllCategory(cat.id)} className="px-3 py-1 bg-slate-600 hover:bg-slate-500 rounded text-sm">Uncheck</button>
                </div>
              </div>
            );
          })}
        </main>

        <footer className="mt-10 text-center text-sm text-gray-400">Built with ❤️ to power your DSA journey.</footer>
      </div>
    </div>
  );
};

export default Page;
